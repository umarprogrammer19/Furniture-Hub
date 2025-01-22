"use client"
import { useEffect, useState } from "react";
import { useAuth } from "../../../services/authContext";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const { authenticate } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await authenticate(email, password)) {
      router.push("/shop");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FBEBB5] py-8 px-4">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-[400px]">
        <h2 className="text-center mb-6 text-black text-3xl font-semibold">Login</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          {/* Email input */}
          <div className="mb-6">
            <label htmlFor="username" className="text-black text-lg font-medium mb-2">
              Username or Email Address
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-3 border border-[#9F9F9F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBEBB5] transition-all duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password input */}
          <div className="mb-6">
            <label htmlFor="password" className="text-black text-lg font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-[#9F9F9F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBEBB5] transition-all duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Remember me checkbox */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="rememberMe"
              className="rounded-md border border-[#9F9F9F] bg-[#FFF] h-5 w-5"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            <label htmlFor="rememberMe" className="text-black ml-2 text-sm font-normal">
              Remember Me
            </label>
          </div>

          {/* Submit button and additional link */}
          <div className="flex flex-col items-center gap-4">
            <button
              type="submit"
              className="w-full py-3 bg-[#FBEBB5] text-black rounded-2xl text-xl font-semibold transition-all"
            >
              Login
            </button>
            <p className="text-black text-sm font-light">
              <span className="text-[#FBEBB5] cursor-pointer">Lost Your Password?</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
