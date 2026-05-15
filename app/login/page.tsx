import { Suspense } from "react";
import { LoginForm } from "./login-form";

function LoginFallback() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white">
      <header className="border-b border-neutral-200/80 bg-white">
        <div className="mx-auto flex h-14 max-w-lg items-center px-6">
          <span className="font-heading text-lg font-semibold tracking-tight text-neutral-900">
            Admit
          </span>
        </div>
      </header>
      <div className="flex flex-1 items-center justify-center px-6 py-16">
        <p className="text-sm text-neutral-500">Loading…</p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginFallback />}>
      <LoginForm />
    </Suspense>
  );
}
