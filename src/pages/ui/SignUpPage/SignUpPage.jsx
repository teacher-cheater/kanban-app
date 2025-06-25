import React from "react";
import AuthForm from "../../../features/auth/ui/AuthForm/AuthForm";

export default function SignUpPage({ isAuth, setIsAuth }) {
  return (
    <div>
      <AuthForm isSignUp isAuth={isAuth} setIsAuth={setIsAuth} />
    </div>
  );
}
