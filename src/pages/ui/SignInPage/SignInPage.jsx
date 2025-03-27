import React from 'react'
import AuthForm from '../../../features/auth/ui/AuthForm/AuthForm'

export default function SignInPage() {
  return (
    <div>
        <AuthForm isSignUp={false}/>
    </div>
  )
}
