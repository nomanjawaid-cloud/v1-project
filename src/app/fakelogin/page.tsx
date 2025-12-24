// import Link from "next/link";

// function LogIn() {
//   return (
//     <div>
//       <h1 className="bg-blue-500"> hello fake login </h1>
//     </div>
//   );
// }
// export default LogIn;



function LogIn() {
  return (
    <div className="flex items-center justify-center px-4">
      
      {/* Single Octagon */}
      <div className="octagon  w-[520px] h-[580px]  bg-gray-800 px-8 py-10 text-white shadow-xl">

        {/* Logo */}
        <img
          src="/octagon.png"
          alt="logo"
          className="mx-auto mb-6 mt-8 h-14 w-auto"
        />

        <h2 className="mb-6 text-center text-2xl font-bold">
          Sign in to your account
        </h2>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Email address
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-md bg-gray-700 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm text-gray-300">
                Password
              </label>
              <a
                href="#"
                className="text-sm text-indigo-400 hover:text-indigo-300"
              >
                Forgot?
              </a>
            </div>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full rounded-md bg-gray-700 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 py-2.5 text-sm font-semibold hover:bg-indigo-500 transition"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Not a member?{" "}
          <a href="#" className="text-indigo-400 font-semibold">
            Sign up
          </a>
        </p>

      </div>
    </div>
  );
}

export default LogIn;
