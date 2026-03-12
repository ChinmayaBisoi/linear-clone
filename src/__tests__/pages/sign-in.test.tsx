import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import { describe, expect, it, vi } from "vitest";
import SignInPage from "~/pages/sign-in";

vi.mock("next/router", () => ({
  useRouter: vi.fn(),
}));

vi.mock("~/lib/auth/client", () => ({
  authClient: {
    signIn: {
      social: vi.fn(),
      emailOtp: vi.fn(),
    },
    emailOtp: {
      sendVerificationOtp: vi.fn(),
    },
    useSession: vi.fn(() => ({ data: null, isPending: false })),
  },
}));

describe("SignIn page", () => {
  beforeEach(() => {
    vi.mocked(useRouter).mockReturnValue({
      push: vi.fn(),
      query: {},
    } as unknown as ReturnType<typeof useRouter>);
  });

  it("renders sign-in heading", () => {
    render(<SignInPage />);
    expect(
      screen.getByRole("heading", { name: /sign in/i }),
    ).toBeInTheDocument();
  });

  it("renders email input and send code option", () => {
    render(<SignInPage />);
    expect(
      screen.getByPlaceholderText(/you@example\.com/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /send one-time code/i }),
    ).toBeInTheDocument();
  });

  it("renders Google sign-in button", () => {
    render(<SignInPage />);
    expect(
      screen.getByRole("button", { name: /continue with google/i }),
    ).toBeInTheDocument();
  });
});
