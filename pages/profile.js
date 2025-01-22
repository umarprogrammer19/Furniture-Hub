import AuthPage from "@/components/authComponents/authPage/authPage";
import React from "react";
import "../src/app/globals.css";
import { AuthProvider } from "@/services/authContext";
import { SearchProvider } from "../context/searchContext";

const Profile = () => {
  return (
    <SearchProvider>
      <AuthProvider>
        <AuthPage />
      </AuthProvider>
    </SearchProvider>
  );
};

export default Profile;
