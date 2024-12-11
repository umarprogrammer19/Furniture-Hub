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
    console.log('HERE');
    e.preventDefault();
    if (await authenticate(email, password)) {
      console.log('CALISTI');
      router.push('/shop'); 
    }
  };

  return (
    <div className="flex flex-col items-start max-w-[350px] m-auto p-5">
      <h2 className="text-center mb-8 text-black text-4xl font-semibold">Login</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="text-black text-base font-medium">
            Username or email address
          </label>
          <input
            type="text"
            id="username"
            className="mt-8 mb-8 w-full rounded-xl border border-[#9F9F9F] bg-[#FFF] h-12"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="text-black text-base font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className=" text-black mt-8 mb-8 w-full rounded-xl border border-[#9F9F9F] bg-[#FFF] h-12"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center mb-3 gap-4">
          <input
            type="checkbox"
            id="rememberMe"
            className=" rounded-md border border-[#9F9F9F] bg-[#FFF]"
            checked={remember}
            onChange={() => setRemember(!remember)}
          />
          <label htmlFor="rememberMe" className="text-black text-base font-normal">
            Remember Me
          </label>
        </div>
        <div className="mt-4 flex gap-4">
          <button type="submit" className="py-2 px-16 rounded-2xl border border-black cursor-pointer text-black text-xl font-normal">
            Login
          </button>
          <p className="text-black text-sm font-light">Lost Your Password ?</p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
