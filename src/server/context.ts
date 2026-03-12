import type { CreateNextContextOptions } from "@trpc/server/adapters/next";

export type Context = Record<string, never>;

export function createContext(_opts: CreateNextContextOptions): Context {
  return {};
}
