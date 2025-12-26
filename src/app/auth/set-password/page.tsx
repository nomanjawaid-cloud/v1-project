// "use client";

// import { useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { apiRequest } from "@/lib/api";

// export default function SetPassword() {
//   const token = useSearchParams().get("token");
//   const router = useRouter();
//   const [password, setPassword] = useState("");

//   const submit = async () => {
//     await apiRequest("/auth/set-password", "POST", {
//       token,
//       password,
//     });

//     router.push("/auth/login");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className=" octagon bg-gray-800 p-8 rounded-xl text-white">
//         <h2 className="text-xl mb-4">Set your password</h2>
//         <input
//           type="password"
//           className="w-full mb-4 p-2 rounded bg-gray-700"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           onClick={submit}
//           className="w-full bg-indigo-600 py-2 rounded"
//         >
//           Set Password
//         </button>
//       </div>
//     </div>
//   );
// }

// octagon shape + enter working
"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { apiRequest } from "@/lib/api";

export default function SetPassword() {
  const token = useSearchParams().get("token");
  const router = useRouter();
  const [password, setPassword] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); // page reload stop
    await apiRequest("/auth/set-password", "POST", {
      token,
      password,
    });
    router.push("/auth/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="octagon w-[420px] h-[380px] max-w-sm bg-gray-900 p-8 text-gray-200 shadow-2xl">
        <h2 className="mb-6 text-center text-2xl font-bold mt-20">
          Set your password
        </h2>

        {/* FORM  + enter key working */}
        <form onSubmit={submit}>
          <input
            type="password"
            placeholder="New password"
            className="mb-4 w-full rounded-md bg-gray-800 px-3 py-2"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 py-2.5 font-semibold"
          >
            Set Password
          </button>
        </form>
      </div>
    </div>
  );
}
