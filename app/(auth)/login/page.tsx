import { AuthProvider } from "@/contexts/auth-context";
import LoginForm from "@/modules/authentication/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    </div>
  );
};

export default LoginPage;
