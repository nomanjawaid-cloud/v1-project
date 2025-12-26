// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// interface LogInFormData {
//   email: string;
//   password: string;
// }

// const LogIn: React.FC = () => {
//   const [formData, setFormData] = useState<LogInFormData>({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <form className="w-full max-w-md bg-blue-200 p-6 rounded-lg shadow space-y-4">
//         <h2 className="text-xl font-semibold text-center">Log In</h2>

//         <Input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         />

//         <Input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//         />

//         {/* Terms */}
//         <div className="flex items-center space-x-2"></div>

//         <Button className="w-full" type="submit">
//           Log In
//         </Button>

//         <p className="text-center text-sm text-gray-600">
//           Dont have an account?{" "}
//           <Link
//             href="/register"
//             className="text-blue-600 font-medium hover:underline"
//           >
//             Register
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LogIn;


// // with fake api use
// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// interface LogInFormData {
//   email: string;
//   password: string;
// }

// const LogIn: React.FC = () => {
//   const [formData, setFormData] = useState<LogInFormData>({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       // 🔗 FAKE API URL (yahan apna URL paste karo)
//       const response = await fetch("https://fake-api.example.com/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         setMessage("Login failed");
//         return;
//       }

//       console.log("Fake API Response:", data);
//       setMessage("Login successful (check console)");
//     } catch (error) {
//       setMessage(" API error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md bg-blue-200 p-6 rounded-lg shadow space-y-4"
//       >
//         <h2 className="text-xl font-semibold text-center">Log In</h2>

//         <Input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <Input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />

//         <Button className="w-full" type="submit" disabled={loading}>
//           {loading ? "Logging in..." : "Log In"}
//         </Button>

//         {message && (
//           <p className="text-center text-sm text-gray-700">{message}</p>
//         )}

//         <p className="text-center text-sm text-gray-600">
//           Don’t have an account?{" "}
//           <Link
//             href="/register"
//             className="text-blue-600 font-medium hover:underline"
//           >
//             Register
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LogIn;



 
//  crud pro sign in code 
// "use client";

// import { useState, FormEvent, useEffect } from "react";
// import { Input } from "@/components/ui/input";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/components/AuthProvider";

// interface LoginForm {
//   email: string;
//   password: string;
// }

// export default function LoginForm() {
//   const router = useRouter();
//   const { token, login } = useAuth();

//   const [formData, setFormData] = useState<LoginForm>({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (token) {
//       router.push("/dashboard");
//     }
//   }, [token, router]);

//   const handleInputChange = (name: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_LOGIN_API}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             email: formData.email,
//             password: formData.password,
//           }),
//         }
//       );

//       const data = await res.json();

//       if (!res.ok) {
//         alert(data.message || "Invalid credentials");
//         setLoading(false);
//         return;
//       }

//       console.log("Login Response:", data);

//       // Store token

//       login(data.accessToken);

//       // Redirect
//       router.push("/dashboard");
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong");
//     }

//     setLoading(false);
//   };

//   if (token) return null;

//   return (
//     <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
//       <div className="max-w-md w-full p-6 bg-white shadow rounded-2xl">
//         <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
//           Log In
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-3">
//           <Input
//             type="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={(e) => handleInputChange("email", e.target.value)}
//           />

//           <Input
//             type="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={(e) => handleInputChange("password", e.target.value)}
//           />

//           <button
//             disabled={loading}
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-2xl disabled:opacity-50 transition"
//           >
//             {loading ? "Logging In..." : "Log In"}
//           </button>

//           <div className="text-center">
//             <p className="text-sm text-gray-700">
//               Don't have an account?
//               <Link
//                 href="/auth/register"
//                 className="text-indigo-600 underline ml-1"
//               >
//                 Register here
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
