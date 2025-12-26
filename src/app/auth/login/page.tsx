"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiRequest } from "@/lib/api";

export default function LogIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await apiRequest("/auth/login", "POST", {
        email,
        password,
      });

      if (res.status === "INVITED_USER") {
        router.push(`/auth/set-password?token=${res.token}`);
        return;
      }

      router.push("/auth/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex px-4 ml-220">
      <div className="octagon w-[520px] h-[580px] bg-gray-800 px-8 py-10 text-white shadow-xl">
        <img src="/octagon.png" className="mx-auto mb-6 mt-8 h-14" />

        <h2 className="mb-6 text-center text-2xl font-bold">
          Sign in to your account
        </h2>

        {error && (
          <p className="mb-4 text-center text-sm text-red-400">{error}</p>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md bg-gray-700 px-3 py-2 text-sm"
          />

          <input
            type="password"
            required
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md bg-gray-700 px-3 py-2 text-sm"
          />

          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 py-2.5 text-sm font-semibold"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          <a href="/forgot-password" className="text-indigo-400">
            Forgot password?
          </a>
        </p>
      </div>
    </div>
  );
}

