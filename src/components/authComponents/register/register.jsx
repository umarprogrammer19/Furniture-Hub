import React, { useState } from "react";

const RegisterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email: ", email);
  };

  return (
    <div className="flex flex-col items-center max-w-md mx-auto p-5 sm:w-full">
      <h2 className="text-center mb-8 text-black text-3xl sm:text-2xl font-semibold">Register</h2>
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <div className="w-full">
          <label htmlFor="username" className="text-black text-base font-medium">
            Email address
          </label>
          <input
            type="text"
            id="username"
            className="my-4 w-full rounded-xl border border-[#9F9F9F] bg-[#FFF] h-12 sm:h-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <p className="text-black text-justify text-base font-light sm:text-sm">
          A link to set a new password will be sent to your email address.
        </p>
        <p className="text-black text-justify text-base font-light mb-12 sm:text-sm">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <span className="text-black text-base font-semibold">privacy policy.</span>
        </p>
        <button
          type="submit"
          className="w-full sm:w-52 py-2 px-16 rounded-2xl border border-black cursor-pointer text-black text-xl font-normal hover:bg-[#FAF4F4] sm:text-lg"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
