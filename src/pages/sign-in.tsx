import { useRouter } from "next/router";
import { useState } from "react";
import { Logo } from "~/components/Logo";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { authClient } from "~/lib/auth/client";

type Step = "choose" | "email-sent" | "verify";

export default function SignInPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("choose");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleSignIn = async () => {
    setError(null);
    setLoading(true);
    const { error: err } = await authClient.signIn.social({
      provider: "google",
      callbackURL: (router.query.callbackUrl as string) ?? "/",
    });
    setLoading(false);
    if (err) setError(err.message ?? "Google sign-in failed");
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email.trim()) return;
    setLoading(true);
    const { error: err } = await authClient.emailOtp.sendVerificationOtp({
      email: email.trim(),
      type: "sign-in",
    });
    setLoading(false);
    if (err) {
      setError(err.message ?? "Failed to send code");
      return;
    }
    setStep("email-sent");
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email.trim() || !otp.trim()) return;
    setLoading(true);
    const { error: err } = await authClient.signIn.emailOtp({
      email: email.trim(),
      otp: otp.trim(),
    });
    setLoading(false);
    if (err) {
      setError(err.message ?? "Invalid or expired code");
      return;
    }
    const url = (router.query.callbackUrl as string) ?? "/";
    await router.push(url);
  };

  return (
    <div className="linear-grid flex min-h-screen flex-col items-center justify-center bg-[#08090c] px-4 py-12">
      <a href="/" className="mb-8 flex items-center gap-2">
        <Logo size="sm" />
      </a>
      <Card className="w-full max-w-[400px] border-white/10 bg-white/[0.04]">
        <CardHeader className="space-y-1 text-center">
          <h1 className="text-xl font-semibold tracking-tight text-zinc-100">
            Sign in
          </h1>
          <p className="text-sm text-zinc-400">
            Use Google or a one-time code sent to your email
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <div
              className="rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200"
              role="alert"
            >
              {error}
            </div>
          )}

          {step === "choose" && (
            <>
              <Button
                type="button"
                variant="outline"
                className="w-full gap-2 border-white/20"
                onClick={handleGoogleSignIn}
                disabled={loading}
              >
                <GoogleIcon className="h-4 w-4" />
                Continue with Google
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-white/10" />
                </div>
                <span className="relative flex justify-center text-xs text-zinc-500">
                  or
                </span>
              </div>
              <form onSubmit={handleSendOtp} className="space-y-3">
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  disabled={loading}
                />
                <Button
                  type="submit"
                  variant="secondary"
                  className="w-full border border-white/15 bg-white/5"
                  disabled={loading}
                >
                  Send one-time code
                </Button>
              </form>
            </>
          )}

          {(step === "email-sent" || step === "verify") && (
            <form onSubmit={handleVerifyOtp} className="space-y-3">
              <p className="text-sm text-zinc-400">
                We sent a 6-digit code to{" "}
                <span className="font-medium text-zinc-200">{email}</span>.
                Enter it below.
              </p>
              <Input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={6}
                placeholder="000000"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                className="text-center text-lg tracking-[0.4em]"
                disabled={loading}
                autoFocus
              />
              <Button
                type="submit"
                className="w-full"
                disabled={loading || otp.length !== 6}
              >
                Verify and sign in
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="w-full text-zinc-400"
                onClick={() => {
                  setStep("choose");
                  setOtp("");
                  setError(null);
                }}
                disabled={loading}
              >
                Use a different email
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
      <p className="mt-6 text-center text-xs text-zinc-500">
        By signing in you agree to our Terms and Privacy Policy.
      </p>
    </div>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden role="img">
      <title>Google</title>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}
