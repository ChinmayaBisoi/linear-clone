import type { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { emailOTP } from "better-auth/plugins";
import { sendVerificationOTP } from "~/lib/auth/transport";
import { prisma } from "~/lib/db";

const baseURL = process.env.BETTER_AUTH_URL ?? "http://localhost:3000";

export const authOptions: Parameters<typeof betterAuth>[0] = {
  baseURL,
  secret: process.env.BETTER_AUTH_SECRET,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: false,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    },
  },
  plugins: [
    emailOTP({
      sendVerificationOTP: async (params) => {
        await sendVerificationOTP(params);
      },
      otpLength: 6,
      expiresIn: 300,
      allowedAttempts: 3,
    }),
  ],
};
