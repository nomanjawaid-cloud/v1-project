// function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   );
// }
// export default Home;


"use client";

import HexagonWithHoneycomb from "@/components/HexagonWithHoneycomb";
// import LogIn from "./signIn/page";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <HexagonWithHoneycomb />
      {/* <LogIn /> */}
      
    </main>
  );
}