-- GetFitAI D1 Database Schema
-- Users, Subscriptions, Payments

-- Users table (managed by Lucia Auth)
CREATE TABLE IF NOT EXISTS user (
    id TEXT PRIMARY KEY NOT NULL,
    email TEXT UNIQUE NOT NULL,
    email_verified INTEGER DEFAULT 0,
    name TEXT,
    avatar_url TEXT,
    created_at INTEGER DEFAULT (unixepoch()),
    updated_at INTEGER DEFAULT (unixepoch())
);

-- OAuth accounts (GitHub, Google, etc.)
CREATE TABLE IF NOT EXISTS oauth_account (
    provider_id TEXT NOT NULL,
    provider_user_id TEXT NOT NULL,
    user_id TEXT NOT NULL REFERENCES user(id),
    created_at INTEGER DEFAULT (unixepoch()),
    PRIMARY KEY (provider_id, provider_user_id)
);

-- Sessions
CREATE TABLE IF NOT EXISTS session (
    id TEXT PRIMARY KEY NOT NULL,
    user_id TEXT NOT NULL REFERENCES user(id),
    expires_at INTEGER NOT NULL,
    created_at INTEGER DEFAULT (unixepoch())
);

-- Subscriptions
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

-- Payments / Invoices
CREATE TABLE IF NOT EXISTS payment (
    id TEXT PRIMARY KEY NOT NULL,
    user_id TEXT NOT NULL REFERENCES user(id),
    stripe_payment_intent_id TEXT,
    stripe_invoice_id TEXT,
    amount INTEGER NOT NULL, -- in cents
    currency TEXT DEFAULT 'usd',
    status TEXT NOT NULL CHECK(status IN ('succeeded', 'pending', 'failed', 'refunded')),
    description TEXT,
    created_at INTEGER DEFAULT (unixepoch())
);

-- Workout plan history (for logged-in users)
CREATE TABLE IF NOT EXISTS workout_history (
    id TEXT PRIMARY KEY NOT NULL,
    user_id TEXT NOT NULL REFERENCES user(id),
    title TEXT NOT NULL,
    goal TEXT,
    experience TEXT,
    duration INTEGER,
    equipment TEXT,
    target_area TEXT,
    plan_data TEXT NOT NULL, -- JSON
    created_at INTEGER DEFAULT (unixepoch())
);

-- Usage tracking (for rate limiting)
CREATE TABLE IF NOT EXISTS usage_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT REFERENCES user(id),
    ip_hash TEXT,
    action TEXT NOT NULL, -- 'generate_plan', 'calculator', etc.
    created_at INTEGER DEFAULT (unixepoch())
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_session_user ON session(user_id);
CREATE INDEX IF NOT EXISTS idx_subscription_user ON subscription(user_id);
CREATE INDEX IF NOT EXISTS idx_subscription_stripe ON subscription(stripe_subscription_id);
CREATE INDEX IF NOT EXISTS idx_payment_user ON payment(user_id);
CREATE INDEX IF NOT EXISTS idx_workout_history_user ON workout_history(user_id);
CREATE INDEX IF NOT EXISTS idx_usage_log_user ON usage_log(user_id, created_at);
CREATE INDEX IF NOT EXISTS idx_usage_log_ip ON usage_log(ip_hash, created_at);
