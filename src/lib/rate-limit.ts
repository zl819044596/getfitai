import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Simple in-memory fallback for development / no Redis config
const memoryCache = new Map<string, number[]>();

function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

export function createRateLimit(
  requests: number,
  window: "1 m" | "1 h" | "1 d"
) {
  const redis = getRedis();

  if (redis) {
    return new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(requests, window),
      analytics: true,
    });
  }

  // In-memory fallback
  return {
    async limit(identifier: string) {
      const now = Date.now();
      const windowMs =
        window === "1 m" ? 60000 : window === "1 h" ? 3600000 : 86400000;
      const key = `${identifier}:${Math.floor(now / windowMs)}`;

      const timestamps = memoryCache.get(key) || [];
      const filtered = timestamps.filter((t) => now - t < windowMs);
      filtered.push(now);
      memoryCache.set(key, filtered);

      return {
        success: filtered.length <= requests,
        limit: requests,
        remaining: Math.max(0, requests - filtered.length),
        reset: Math.floor((Math.floor(now / windowMs) + 1) * windowMs / 1000),
      };
    },
  };
}
