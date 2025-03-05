"use client";
import { createContext, use, useContext, useEffect, useState } from "react";

export interface AuthUser {
  uid: string;
  email: string | null;
  emailVerified: boolean;
  isAnonymous: boolean;
  providerData: ProviderDaum[];
  accessToken?: string;
  refreshToken: string;
}

export interface ProviderDaum {
  providerId: string;
  uid: string;
  displayName: any;
  email: string | null;
  phoneNumber: any;
  photoURL: any;
}
const defaultUser: AuthUser | null = null;

interface AuthContextType {
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
}

const AuthUserContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        return JSON.parse(savedUser ?? "");
      }
    }
    return defaultUser;
  });

  useEffect(() => {
    localStorage.setItem("user", user ? JSON.stringify(user) : "");
  }, [user]);

  const updateUser = (user: AuthUser | null) => {
    setUser(user);
  };
  return (
    <AuthUserContext.Provider value={{ user, setUser: updateUser }}>
      {children}
    </AuthUserContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthUserContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}
