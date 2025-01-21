import "./globals.css";
import HomePage from "../../pages/home";
import { AuthProvider } from "@/services/authContext";

export default async function Home() {
  return (
    <AuthProvider>
      <main className="flex bg-white min-h-screen flex-col items-center justify-between">
        <HomePage />
      </main>
    </AuthProvider>
  );
}
