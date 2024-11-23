"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: true,
      email,
      password,
      callbackUrl: "/",
    });

    if (!res?.ok) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-pr50 from-pr50 via-pr300 to-pr900 text-gray-800 dark:text-gray-100 dark:from-pr700 dark:via-pr800 dark:to-pr900 flex items-center justify-center p-6">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Silahkan Login 👋🏻</h1>
        {error && (
          <p className="text-sm text-red-500 text-center mb-4">{error}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pr300"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pr300"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pr700 hover:bg-pr700 text-white font-semibold py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pr300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
