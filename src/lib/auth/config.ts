import type { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { bearer, emailOTP } from "better-auth/plugins";
import { sendVerificationOTP } from "~/lib/auth/transport";
import { prisma } from "~/lib/db";
import { env } from "~/lib/env";

export const authOptions: Parameters<typeof betterAuth>[0] = {
  baseURL: env.APPLICATION_URL,
  secret: env.BETTER_AUTH_SECRET,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  databaseHooks: {
    user: {
      create: {
        after: async (user, ctx) => {
          if (!ctx?.context?.internalAdapter || !user?.id) return;
          await ctx.context.internalAdapter.linkAccount({
            userId: user.id,
            accountId: user.id,
            providerId: "credential",
          });
        },
      },
    },
    session: {
      create: {
        after: async (session, ctx) => {
          if (!ctx?.context?.internalAdapter || !session?.userId) return;
          const adapter = ctx.context.internalAdapter;
          const accounts = await adapter.findAccounts(session.userId);
          const credentialAccount = accounts?.find(
            (a: { providerId: string }) => a.providerId === "credential",
          );
          const tokenPayload = {
            accessToken: session.token,
            accessTokenExpiresAt: session.expiresAt,
          };
          if (!credentialAccount) {
            await adapter.linkAccount({
              userId: session.userId,
              accountId: session.userId,
              providerId: "credential",
              ...tokenPayload,
            });
          } else {
            await adapter.updateAccount(credentialAccount.id, tokenPayload);
          }
        },
      },
    },
  },
  emailAndPassword: {
    enabled: false,
  },
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
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
    bearer(),
  ],
};
