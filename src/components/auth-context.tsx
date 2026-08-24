"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type AuthUser = {
  id: string;
  email: string;
  name?: string | null;
};

type Quota = {
  limit: number;
  used: number;
  remaining: number;
};

type AuthContextValue = {
  user: AuthUser | null;
  isPro: boolean;
  quota: Quota | null;
  loading: boolean;
  login: () => void;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
  setQuota: (quota: Quota | null) => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isPro, setIsPro] = useState(false);
  const [quota, setQuota] = useState<Quota | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/me", { cache: "no-store" });
      if (!response.ok) {
        setUser(null);
        setIsPro(false);
        setQuota(null);
        return;
      }

      const data = (await response.json()) as {
        user?: AuthUser;
        subscription?: { is_pro?: boolean };
        quota?: Quota;
      };
      setUser(data.user ?? null);
      setIsPro(Boolean(data.subscription?.is_pro));
      setQuota(data.quota ?? null);
    } catch {
      // Keep the app usable if the auth service is temporarily unavailable.
      setUser(null);
      setIsPro(false);
      setQuota(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const login = useCallback(() => {
    window.location.assign("/api/auth/google");
  }, []);

  const logout = useCallback(async () => {
    try {
      await fetch("/api/auth/logout", { cache: "no-store" });
    } finally {
      setUser(null);
      setIsPro(false);
      setQuota(null);
      window.location.assign("/");
    }
  }, []);

  const value = useMemo(
    () => ({ user, isPro, quota, loading, login, logout, refresh, setQuota }),
    [user, isPro, quota, loading, login, logout, refresh],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
