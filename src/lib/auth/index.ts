import { betterAuth } from "better-auth";
import { authOptions } from "~/lib/auth/config";

export const auth = betterAuth(authOptions);

export type Auth = typeof auth;
