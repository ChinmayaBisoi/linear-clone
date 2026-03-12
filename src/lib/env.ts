import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.url(),
    BETTER_AUTH_SECRET: z.string().min(32),
    APPLICATION_URL: z.url().default("http://localhost:3000"),
    GOOGLE_CLIENT_ID: z.string().default(""),
    GOOGLE_CLIENT_SECRET: z.string().default(""),
  },
  shared: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    PORT: z.union([z.string(), z.coerce.number()]).optional(),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
