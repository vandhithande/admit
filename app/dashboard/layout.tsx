"use client";

import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { UserProvider } from "@/components/user-context";
import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <UserProvider>
      <div className="flex h-screen overflow-hidden">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar — drawer on mobile, static on desktop */}
        <div className={`fixed inset-y-0 left-0 z-30 w-56 transform transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <DashboardSidebar onClose={() => setSidebarOpen(false)} />
        </div>

        <div className="flex min-w-0 flex-1 flex-col overflow-y-auto">
          {/* Mobile top bar */}
          <div className="flex h-14 items-center border-b border-stone-200/60 dark:border-stone-700/50 px-4 lg:hidden" style={{ background: "var(--bg-card)" }}>
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-100"
            >
              <Menu size={20} />
            </button>
            <Link href="/dashboard" className="ml-3 font-heading text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100">
              admit
            </Link>
          </div>

          {children}
        </div>
      </div>
    </UserProvider>
  );
}
