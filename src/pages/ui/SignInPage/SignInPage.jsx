import React from "react";
import AuthForm from "../../../features/auth/ui/AuthForm/AuthForm";

export default function SignInPage({ setIsAuth, isAuth }) {

  return (
    <div>
      <AuthForm isSignUp={false} setIsAuth={setIsAuth} isAuth={isAuth} />
    </div>
  );
}
