"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { createClient } from "@/lib/supabase";
import { useUser } from "@/components/user-context";
import {
  LayoutDashboard,
  School,
  MessageSquare,
  FileText,
  ListChecks,
  Calendar,
  Settings,
  LogOut,
  X,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/schools", label: "My Schools", icon: School, free: true },
  { href: "/dashboard/activities", label: "Activities", icon: ListChecks, free: true },
  { href: "/dashboard/timeline", label: "Timeline", icon: Calendar, free: true },
  { href: "/dashboard/counselor", label: "AI Counselor", icon: MessageSquare },
  { href: "/dashboard/essays", label: "Essay Review", icon: FileText },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function DashboardSidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);
  const { user, isPro } = useUser();

  const email = user?.email ?? null;

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <aside
      className="flex h-full w-56 shrink-0 flex-col"
      style={{ background: "var(--bg-sidebar)" }}
    >
      <div className="flex h-14 items-center justify-between border-b border-white/8 px-5">
        <Link
          href="/dashboard"
          onClick={onClose}
          className="font-heading text-lg font-bold tracking-tight text-white"
        >
          admit
        </Link>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-white/40 hover:text-white/80 lg:hidden"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <nav className="flex-1 space-y-0.5 p-3 pt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);
          const isProFeature = !item.free && item.href !== "/dashboard" && item.href !== "/dashboard/settings";
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`relative flex items-center justify-between gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                active
                  ? "bg-white/10 font-medium text-white"
                  : "text-white/40 hover:bg-white/7 hover:text-white/80"
              }`}
            >
              <div className="flex items-center gap-2.5">
                {active && (
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 h-5 w-0.5 rounded-r-full bg-orange-400" />
                )}
                <Icon size={15} strokeWidth={active ? 2.2 : 1.8} />
                {item.label}
              </div>
              {isProFeature && !isPro && (
                <span className="rounded-full bg-orange-500/20 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-orange-400">
                  Pro
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/8 p-3">
        {!isPro && (
          <Link
            href="/subscribe"
            onClick={onClose}
            className="mb-2 flex w-full items-center justify-center gap-1.5 rounded-lg bg-orange-600/90 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-orange-600"
          >
            ⚡ Upgrade to Pro
          </Link>
        )}
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
