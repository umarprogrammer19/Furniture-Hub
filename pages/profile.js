import AuthPage from "@/components/authComponents/authPage/authPage";
import React from "react";
import "../src/app/globals.css";
import { AuthProvider } from "@/services/authContext";

const Profile = () => {
  return (
    <AuthProvider>
      <AuthPage />
    </AuthProvider>
  );
};

export default Profile;
