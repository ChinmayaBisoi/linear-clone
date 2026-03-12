"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "~/components/ui/button";
import { authClient } from "~/lib/auth/client";

export function HeaderAuth() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/");
  };

  if (isPending) {
    return (
      <div className="flex items-center gap-2">
        <div className="h-8 w-16 animate-pulse rounded-md bg-white/10" />
      </div>
    );
  }

  if (session?.user) {
    return (
      <div className="flex items-center gap-2">
        <span className="hidden max-w-[140px] truncate text-sm text-zinc-400 md:inline">
          {session.user.email}
        </span>
        <Button
          variant="ghost"
          size="sm"
          className="text-xs"
          onClick={handleSignOut}
        >
          Sign out
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/sign-in"
        className="hidden inline-flex h-8 items-center justify-center rounded-md px-3 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-800/70 hover:text-zinc-100 md:inline-flex"
      >
        Log in
      </Link>
      <Link
        href="/sign-in"
        className="inline-flex h-9 items-center justify-center rounded-full bg-zinc-100 px-4 text-xs font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
      >
        Sign up
      </Link>
    </div>
  );
}
