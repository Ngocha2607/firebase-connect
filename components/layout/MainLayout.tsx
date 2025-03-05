import { SettingsProvider } from "@/contexts/settings-context";
import { Sidebar } from "../sidebar";
import { TopNav } from "../top-nav";
import { AuthProvider } from "@/contexts/auth-context";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SettingsProvider>
      <AuthProvider>
        <div className="min-h-screen flex">
          <Sidebar />
          <div className="flex-1">
            <TopNav />
            <div className="container mx-auto p-6 max-w-7xl">
              <main className="w-full">{children}</main>
            </div>
          </div>
        </div>
      </AuthProvider>
    </SettingsProvider>
  );
}
