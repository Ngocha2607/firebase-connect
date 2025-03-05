import { AuthProvider } from "@/contexts/auth-context";
import RegisterForm from "@/modules/authentication/RegisterForm";
import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <AuthProvider>
        <RegisterForm />
      </AuthProvider>
    </div>
  );
};

export default RegisterPage;
