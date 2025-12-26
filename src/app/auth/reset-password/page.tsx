"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { apiRequest } from "@/lib/api";

export default function ResetPassword() {
  const token = useSearchParams().get("token");
  const router = useRouter();
  const [password, setPassword] = useState("");

  const submit = async () => {
    await apiRequest("/auth/reset-password", "POST", {
      token,
      password,
    });

    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="octagon flex flex-col items-center justify-center bg-gray-800 p-8 rounded-xl w-[240px] h-[380px] text-white">
        <input
          type="password"
          placeholder="New password"
          className="w-full p-2 mb-4 bg-gray-700 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={submit} className="w-full bg-indigo-600 py-2 rounded">
          Reset Password
        </button>

        
      </div>
    </div>
  );
}
