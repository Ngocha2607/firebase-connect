import { AuthProvider } from "@/contexts/auth-context";
import Homepage from "@/modules/homepage";
export default function Home() {
  return (
    <AuthProvider>
      <Homepage />
    </AuthProvider>
  );
}
