import { describe, expect, it, vi } from "vitest";

vi.mock("~/lib/db", () => ({ prisma: {} }));
vi.mock("~/lib/env", () => ({
  env: {
    APPLICATION_URL: "http://localhost:3000",
    BETTER_AUTH_SECRET: "x".repeat(32),
    GOOGLE_CLIENT_ID: "",
    GOOGLE_CLIENT_SECRET: "",
  },
}));

import { authOptions } from "~/lib/auth/config";

describe("auth config", () => {
  it("exports auth options with baseURL", () => {
    expect(authOptions.baseURL).toBeDefined();
    expect(typeof authOptions.baseURL).toBe("string");
  });

  it("uses Prisma database adapter", () => {
    expect(authOptions.database).toBeDefined();
    expect(typeof authOptions.database).toBe("function");
  });

  it("has email OTP plugin configured", () => {
    expect(Array.isArray(authOptions.plugins)).toBe(true);
    expect(authOptions.plugins?.length).toBeGreaterThan(0);
  });

  it("has Google social provider config", () => {
    expect(authOptions.socialProviders).toBeDefined();
    expect(authOptions.socialProviders?.google).toBeDefined();
  });
});
