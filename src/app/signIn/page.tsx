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





// tailwind css form
 