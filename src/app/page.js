import "./globals.css";
import HomePage from "../../pages/home";
import { AuthProvider } from "@/services/authContext";
import { SearchProvider } from "../../context/searchContext";

export default async function Home() {
  return (
    <SearchProvider>
    <AuthProvider>
      <main className="flex bg-white min-h-screen flex-col items-center justify-between">
        <HomePage />
      </main>
    </AuthProvider>
    </SearchProvider>
  );
}
