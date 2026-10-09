import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

const links = [
  { to: "/", label: "note" },
  { to: "/pair", label: "pair" },
  { to: "/method", label: "method" },
] as const;

function Mark() {
  return (
    <img
      src="/mark.jpg"
      alt=""
      width={44}
      height={44}
      className="h-11 w-11 rounded-full object-cover"
    />
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-5">
        <Link to="/" className="flex items-center gap-3 text-accent">
          <Mark />
          <span className="font-serif text-2xl leading-none text-fg">bunker mode</span>
        </Link>
        <nav className="flex gap-1">
          {links.map((item) => {
            const on = path === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={
                  on
                    ? "px-3 py-2 font-mono text-sm text-accent"
                    : "px-3 py-2 font-mono text-sm text-muted"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <main className="mx-auto max-w-3xl px-5 pb-16">{children}</main>
      <footer className="mx-auto max-w-3xl border-t border-line px-5 py-6 font-mono text-sm text-muted">
        bunker mode is not Starknet, and $BUNKER is not $STRK.
      </footer>
    </div>
  );
}
