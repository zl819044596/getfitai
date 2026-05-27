import { describe, it, expect } from "vitest";
import { createRateLimit } from "../rate-limit";

describe("rate-limit", () => {
  it("allows requests within limit", async () => {
    const limiter = createRateLimit(3, "1 m");
    const result = await limiter.limit("test-ip");
    expect(result.success).toBe(true);
    expect(result.remaining).toBeGreaterThanOrEqual(0);
  });

  it("blocks requests over limit", async () => {
    const limiter = createRateLimit(2, "1 m");
    await limiter.limit("test-ip-2");
    await limiter.limit("test-ip-2");
    const result = await limiter.limit("test-ip-2");
    expect(result.success).toBe(false);
  });
});
