import React from 'react';
import LoginScreenComponent from './login/LoginScreen';
import RegisterScreenComponent from './register/RegisterScreen';
import ForgotPasswordScreenComponent from './login/ForgotPassword';
import ResetPasswordScreenComponent from './reset-password/ResetPasswordScreen';

export const LoginScreen = () => <LoginScreenComponent pageName="Login" isPublic />;
export const RegisterScreen = () => <RegisterScreenComponent pageName="Register" isPublic />;
export const ForgotPasswordScreen = () => <ForgotPasswordScreenComponent pageName="Forgot Password" isPublic />;
export const ResetPasswordScreen = () => <ResetPasswordScreenComponent pageName="Reset Password" isPublic />;
