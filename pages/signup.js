"use client";

import '../src/app/globals.css';
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signupUser } from "@/api/auth";

export default function Signup() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const fullname = formData.get("fullName");
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            await signupUser(fullname, email, password);
            router.push("/login");
        } catch (err) {
            setError("Failed to create account");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">Create an account</h2>
                    <p className="mt-2 text-sm text-gray-600">Sign up to get started</p>
                </div>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {error && <div className="text-red-500 text-sm text-center">{error}</div>}
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                autoComplete="name"
                                required
                                className="text-black mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-yellow-700"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="text-black mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-yellow-700"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="text-black mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-yellow-700"
                                placeholder="Create a password"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-yellow-700 hover:bg-yellow-800 text-white py-2 px-4 rounded-md"
                        disabled={isLoading}
                    >
                        {isLoading ? "Creating account..." : "Create account"}
                    </button>

                    <div className="text-center text-sm">
                        <span className="text-gray-600">Already have an account?</span>{" "}
                        <Link href="/login" className="text-yellow-700 hover:text-yellow-800 font-medium">
                            Sign in
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
