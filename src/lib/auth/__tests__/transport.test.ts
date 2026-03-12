import { describe, expect, it, vi } from "vitest";
import { sendVerificationOTP } from "~/lib/auth/transport";

describe("sendVerificationOTP", () => {
  it("resolves without throwing", async () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    await expect(
      sendVerificationOTP({
        email: "test@example.com",
        otp: "123456",
        type: "sign-in",
      }),
    ).resolves.toBeUndefined();
    consoleSpy.mockRestore();
  });

  it("accepts all OTP types", async () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const types = ["sign-in", "email-verification", "forget-password"] as const;
    for (const type of types) {
      await expect(
        sendVerificationOTP({ email: "u@e.com", otp: "000000", type }),
      ).resolves.toBeUndefined();
    }
    consoleSpy.mockRestore();
  });
});
