"use client";

import { createClient } from "@/lib/supabase";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { User } from "@supabase/supabase-js";

type Profile = {
  name?: string;
  grade?: number;
  intended_major?: string;
  interests?: string;
  subscription_status?: string;
  trial_ends_at?: string;
};

type UserContextValue = {
  user: User | null;
  profile: Profile | null;
  isPro: boolean;
  loading: boolean;
  refresh: () => void;
};

const UserContext = createContext<UserContextValue>({
  user: null,
  profile: null,
  isPro: false,
  loading: true,
  refresh: () => {},
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const supabase = useMemo(() => createClient(), []);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const { data: { user: u } } = await supabase.auth.getUser();
      if (cancelled) return;
      setUser(u);
      if (u) {
        const { data } = await supabase
          .from("profiles")
          .select("name, grade, intended_major, interests, subscription_status, trial_ends_at")
          .eq("user_id", u.id)
          .single();
        if (!cancelled) setProfile(data ?? null);
      }
      if (!cancelled) setLoading(false);
    }
    void load();
    return () => { cancelled = true; };
  }, [supabase, tick]);

  const isPro = useMemo(() => {
    const s = profile?.subscription_status;
    const now = new Date();
    const isTrialing = s === "trialing" && profile?.trial_ends_at && new Date(profile.trial_ends_at) > now;
    return s === "active" || Boolean(isTrialing);
  }, [profile]);

  return (
    <UserContext.Provider value={{ user, profile, isPro, loading, refresh: () => setTick(t => t + 1) }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
