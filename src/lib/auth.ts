import { Lucia } from "lucia";
import { D1Adapter } from "@lucia-auth/adapter-sqlite";
import { cookies } from "next/headers";
import { cache } from "react";

export function initializeLucia(D1: D1Database) {
  const adapter = new D1Adapter(D1, {
    user: "user",
    session: "session",
  });

  return new Lucia(adapter, {
    sessionCookie: {
      attributes: {
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      },
    },
    getUserAttributes: (attributes: any) => {
      return {
        email: attributes.email,
        name: attributes.name,
        avatarUrl: attributes.avatar_url,
        plan: attributes.plan || "free",
      };
    },
  });
}

export type Auth = ReturnType<typeof initializeLucia>;

export const validateRequest = cache(
  async (D1: D1Database): Promise<{ user: import("lucia").User | null; session: import("lucia").Session | null }> => {
    const lucia = initializeLucia(D1);
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;

    if (!sessionId) {
      return { user: null, session: null };
    }

    const result = await lucia.validateSession(sessionId);

    try {
      if (result.session && result.session.fresh) {
        const sessionCookie = lucia.createSessionCookie(result.session.id);
        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
      }
      if (!result.session) {
        const sessionCookie = lucia.createBlankSessionCookie();
        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
      }
    } catch {
      // Next.js throws error when setting cookie during rendering
    }

    return result;
  }
);
