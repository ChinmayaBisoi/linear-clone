import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { env } from "~/lib/env";
import type { AppRouter } from "~/server/routers/_app";

function getBaseUrl(): string {
  if (typeof window !== "undefined") return "";
  return env.APPLICATION_URL;
}

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          async headers() {
            return {};
          },
        }),
      ],
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
          },
        },
      },
    };
  },
  ssr: false,
});
