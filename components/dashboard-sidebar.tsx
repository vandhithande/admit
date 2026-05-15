"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase";
import {
  LayoutDashboard,
  School,
  MessageSquare,
  FileText,
  ListChecks,
  Calendar,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/schools", label: "My Schools", icon: School },
  { href: "/dashboard/counselor", label: "AI Counselor", icon: MessageSquare },
  { href: "/dashboard/essays", label: "Essays", icon: FileText },
  { href: "/dashboard/activities", label: "Activities", icon: ListChecks },
  { href: "/dashboard/timeline", label: "Timeline", icon: Calendar },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setEmail(user?.email ?? null);
    });
  }, [supabase]);

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <aside
      className="flex w-56 shrink-0 flex-col"
      style={{ background: "var(--bg-sidebar)" }}
    >
      <div className="flex h-14 items-center border-b border-white/8 px-5">
        <Link
          href="/dashboard"
          className="font-heading text-lg font-bold tracking-tight text-white"
        >
          admit
        </Link>
      </div>

      <nav className="flex-1 space-y-0.5 p-3 pt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                active
                  ? "bg-white/10 font-medium text-white"
                  : "text-white/40 hover:bg-white/7 hover:text-white/80"
              }`}
            >
              {active && (
                <span className="absolute -left-3 top-1/2 -translate-y-1/2 h-5 w-0.5 rounded-r-full bg-orange-400" />
              )}
              <Icon size={15} strokeWidth={active ? 2.2 : 1.8} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/8 p-3">
        {email && (
          <p className="truncate px-3 py-1 text-xs text-white/25" title={email}>
            {email}
          </p>
        )}
        <button
          type="button"
          onClick={() => void signOut()}
          className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-white/35 transition-colors hover:bg-white/7 hover:text-white/70"
        >
          <LogOut size={15} strokeWidth={1.8} />
          Sign out
        </button>
      </div>
    </aside>
  );
}
