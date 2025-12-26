// "use client";

// import { useState } from "react";
// import { apiRequest } from "@/lib/api";

// function ForgotPassword() {
//   const [email, setEmail] = useState("");

//   const submit = async () => {
//     await apiRequest("/auth/forgot-password", "POST", { email });
//     alert("Password reset link sent");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="bg-gray-800 p-8 rounded-xl text-white">
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 mb-4 bg-gray-700"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button
//           onClick={submit}
//           className="w-full bg-indigo-600 py-2 rounded"
//         >
//           Send Reset Link
//         </button>
//       </div>
//     </div>
//   );
// }
// export default ForgotPassword



// octagon shape
"use client";

import { useState } from "react";
import { apiRequest } from "@/lib/api";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const submit = async () => {
    await apiRequest("/auth/forgot-password", "POST", { email });
    alert("Password reset link sent");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      {/* Octagon Card */}
      <div className="octagon w-[380px] h-[420px] bg-gray-800 px-10 py-14 text-white shadow-2xl flex flex-col justify-center">
        
        <h2 className="text-2xl font-bold text-center mb-6">
          Forgot Password
        </h2>

        <p className="text-sm text-gray-400 text-center mb-6">
          Enter your email and well send you a reset link
        </p>

        <input
          type="email"
          placeholder="Email address"
          className="w-full rounded-md bg-gray-700 px-3 py-2 mb-5 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={submit}
          className="w-full rounded-md bg-indigo-600 py-2.5 text-sm font-semibold hover:bg-indigo-500 transition"
        >
          Send Reset Link
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
