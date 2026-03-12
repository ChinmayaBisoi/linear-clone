import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "~/generated/prisma/client";
import { env } from "~/lib/env";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

function makePrisma() {
  const adapter = new PrismaPg({ connectionString: env.DATABASE_URL });
  return new PrismaClient({
    adapter,
    log:
      env.NODE_ENV === "development"
        ? [

          // "query", 
          "info",
          "error", 
          "warn"

        ]
        : ["error"],
  });
}

export const prisma = globalForPrisma.prisma ?? makePrisma();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
