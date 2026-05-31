import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

const CREATE_TABLES_SQL = `
CREATE TABLE IF NOT EXISTS user (
    id TEXT PRIMARY KEY NOT NULL,
    email TEXT UNIQUE NOT NULL,
    email_verified INTEGER DEFAULT 0,
    name TEXT,
    avatar_url TEXT,
    created_at INTEGER DEFAULT (unixepoch()),
    updated_at INTEGER DEFAULT (unixepoch())
);

CREATE TABLE IF NOT EXISTS oauth_account (
    provider_id TEXT NOT NULL,
    provider_user_id TEXT NOT NULL,
    user_id TEXT NOT NULL REFERENCES user(id),
    created_at INTEGER DEFAULT (unixepoch()),
    PRIMARY KEY (provider_id, provider_user_id)
);

CREATE TABLE IF NOT EXISTS session (
    id TEXT PRIMARY KEY NOT NULL,
    user_id TEXT NOT NULL REFERENCES user(id),
    expires_at INTEGER NOT NULL,
    created_at INTEGER DEFAULT (unixepoch())
);

CREATE TABLE IF NOT EXISTS subscription (
    id TEXT PRIMARY KEY NOT NULL,
    user_id TEXT NOT NULL REFERENCES user(id),
    stripe_customer_id TEXT,
    stripe_subscription_id TEXT,
    stripe_price_id TEXT,
    plan TEXT NOT NULL CHECK(plan IN ('free', 'pro', 'lifetime')),
    status TEXT NOT NULL CHECK(status IN ('active', 'canceled', 'past_due', 'unpaid', 'trialing')),
    current_period_start INTEGER,
    current_period_end INTEGER,
    cancel_at_period_end INTEGER DEFAULT 0,
    created_at INTEGER DEFAULT (unixepoch()),
    updated_at INTEGER DEFAULT (unixepoch())
);

CREATE TABLE IF NOT EXISTS payment (
    id TEXT PRIMARY KEY NOT NULL,
    user_id TEXT NOT NULL REFERENCES user(id),
    stripe_payment_intent_id TEXT,
    stripe_invoice_id TEXT,
    amount INTEGER NOT NULL,
    currency TEXT DEFAULT 'usd',
    status TEXT NOT NULL CHECK(status IN ('succeeded', 'pending', 'failed', 'refunded')),
    description TEXT,
    created_at INTEGER DEFAULT (unixepoch())
);

CREATE TABLE IF NOT EXISTS workout_history (
    id TEXT PRIMARY KEY NOT NULL,
    user_id TEXT NOT NULL REFERENCES user(id),
    title TEXT NOT NULL,
    goal TEXT,
    experience TEXT,
    duration INTEGER,
    equipment TEXT,
    target_area TEXT,
    plan_data TEXT NOT NULL,
    created_at INTEGER DEFAULT (unixepoch())
);

CREATE TABLE IF NOT EXISTS usage_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT REFERENCES user(id),
    ip_hash TEXT,
    action TEXT NOT NULL,
    created_at INTEGER DEFAULT (unixepoch())
);

CREATE INDEX IF NOT EXISTS idx_session_user ON session(user_id);
CREATE INDEX IF NOT EXISTS idx_subscription_user ON subscription(user_id);
CREATE INDEX IF NOT EXISTS idx_subscription_stripe ON subscription(stripe_subscription_id);
CREATE INDEX IF NOT EXISTS idx_payment_user ON payment(user_id);
CREATE INDEX IF NOT EXISTS idx_workout_history_user ON workout_history(user_id);
CREATE INDEX IF NOT EXISTS idx_usage_log_user ON usage_log(user_id, created_at);
CREATE INDEX IF NOT EXISTS idx_usage_log_ip ON usage_log(ip_hash, created_at);
`;

export async function GET(request: NextRequest) {
  try {
    // @ts-ignore - D1 binding via env
    const db = request.env?.DB || (request as any).cf?.env?.DB;
    
    if (!db) {
      return NextResponse.json(
        { error: 'Database binding not found', env: Object.keys(request.env || {}) },
        { status: 500 }
      );
    }

    // Execute each statement separately
    const statements = CREATE_TABLES_SQL
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    const results = [];
    for (const sql of statements) {
      try {
        const result = await db.prepare(sql).run();
        results.push({ sql: sql.substring(0, 50) + '...', success: true });
      } catch (e: any) {
        // Ignore "already exists" errors
        if (e.message?.includes('already exists')) {
          results.push({ sql: sql.substring(0, 50) + '...', success: true, note: 'already exists' });
        } else {
          results.push({ sql: sql.substring(0, 50) + '...', success: false, error: e.message });
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Database initialization completed',
      results
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
