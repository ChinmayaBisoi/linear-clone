/**
 * Email transport for OTP and verification emails.
 * In development, OTP is logged to the server console.
 * Replace with Resend, Nodemailer, or another provider in production.
 */
export type SendVerificationOTPParams = {
  email: string;
  otp: string;
  type: "sign-in" | "email-verification" | "forget-password" | "change-email";
};

export async function sendVerificationOTP(
  params: SendVerificationOTPParams,
): Promise<void> {
  const { email, otp, type } = params;
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.log(`[Auth] OTP for ${type} (${email}): ${otp}`);
    return;
  }
  // TODO: Integrate Resend, Nodemailer, or other provider.
  // Example with Resend: await resend.emails.send({ from, to: email, subject, html: `Your code: ${otp}` });
  // eslint-disable-next-line no-console
  console.warn(
    `[Auth] No email transport configured. OTP for ${email}: ${otp}`,
  );
}
