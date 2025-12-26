"use client";
import Image from "next/image";
import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="relative w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-3 flex items-center justify-between shadow-lg shadow-gray-300">
      {/* Left section */}
      <div className="flex items-center gap-4">
        <Link href="#">
          <Image
            src="/pic-2.webp"
            alt="Left Icon"
            width={40}
            height={40}
            className="cursor-pointer object-contain hover:scale-110 transition-transform duration-200"
          />
        </Link>

        {/* Text section */}
        <div className="flex flex-col ml-4 sm:ml-20">
          <h1 className="text-xl font-bold text-gray-800 leading-none">
            Abington Senior School
          </h1>
          <p className="text-lg text-black leading-none mt-1 sm:mt-3 text-center sm:text-left font-medium">
            Chris Test Demo v1
          </p>
        </div>
      </div>

      {/* Center logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden sm:block">
        <Image
          src="/main-logo1.png"
          alt="Transcend Logo"
          width={240}
          height={64}
          className="object-contain w-40 sm:w-52 md:w-60 h-auto "
        />
      </div>

      <div className=" flex gap-4">
        {/* Right section */}

        <Link href="/auth/login" className="block ">
          <MdAccountCircle
            size={32}
            className="cursor-pointer text-gray-600 hover:text-blue-600 hover:scale-110 transition-transform duration-200"
          />
        </Link>

        <Link href="#">
          <Image
            src="/pic-1.avif"
            alt="Right Icon"
            width={32}
            height={32}
            className="cursor-pointer object-contain hover:scale-110 transition-transform duration-200"
          />
        </Link>
      </div>
    </nav>
  );
}
