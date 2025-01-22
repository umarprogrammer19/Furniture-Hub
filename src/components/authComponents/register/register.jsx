"use client"
import React, { useState } from "react";

const RegisterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email: ", email);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FBEBB5] py-8 px-4">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-[400px]">
        <h2 className="text-center mb-6 text-black text-3xl font-semibold">Register</h2>
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
          {/* Email input */}
          <div className="mb-6">
            <label htmlFor="username" className="text-black text-lg font-medium mb-2">
              Email Address
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

          {/* Privacy Policy Text */}
          <p className="text-black text-base font-light mb-6 sm:text-sm">
            A link to set a new password will be sent to your email address.
          </p>
          <p className="text-black text-base font-light mb-8 sm:text-sm">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}
            <span className="text-black font-semibold">privacy policy.</span>
          </p>

          {/* Register button */}
          <div className="flex flex-col items-center gap-4">
            <button
              type="submit"
              className="w-full py-3 bg-[#FBEBB5] text-black rounded-2xl text-xl font-semibold transition-all"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
