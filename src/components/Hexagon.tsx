"use client";

import React from "react";
import Link from "next/link";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { GiSnowflake2 } from "react-icons/gi";
import { MdPlayArrow } from "react-icons/md";
import { RiPlayReverseMiniFill } from "react-icons/ri";

type HexagonProps = {
  onClick?: () => void;
};

const Hexagon: React.FC<HexagonProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative flex items-center justify-center cursor-pointer"
      style={{ width: 400, height: 400 }}
    >
      {/* ===== OUTER BLACK BORDER BASE ===== */}
      <div className="absolute inset-0 hexagon-clip bg-black" />
      {/* ===== OUTER GRAY MAIN ===== */}
      <div className="absolute inset-0.5  hexagon-clip bg-gray-300" />
      {/* ===== INNER WHITE WITH BORDER ===== */}
      {/* Outer black border for inner hexagon */}
      <div className="absolute inset-[9%] hexagon-inner bg-black" />
      {/* Inner white hexagon */}
      <div className="absolute inset-[calc(9%+2px)] hexagon-inner bg-white" />
      {/* ===== CONTENT ===== */}
      //{" "}
      <div className="relative z-10 flex flex-col items-center justify-between h-full px-14 py-16 text-center">
        {/* Top arrows */}
        {/* <div className="flex justify-between w-full text-gray-700"> */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 flex justify-between w-[60%] mt-20 text-gray-800">
          <Link href="/LeftArrow">
            <RiPlayReverseMiniFill size={22} />
          </Link>

          <Link href="/RightArrow">
            <MdPlayArrow size={22} />
          </Link>
        </div>

        {/* Center text */}
        <div className="flex flex-col items-center justify-center flex-1 gap-4 mt-2">
          <h3 className="text-3xl font-semibold text-gray-800">Mission</h3>

          <p className="text-lg mb-15 text-purple-600 max-w-70">
            The mission of the Upper Dublin School District, which includes
            Upper Dublin High School, is to provide an
          </p>
        </div>

        {/* Bottom icons */}
        <div className="flex gap-6 text-gray-700 w-{24}">
          <HiOutlineArrowsExpand />
          <GiSnowflake2 />
        </div>
      </div>
    </div>
  );
};

export default Hexagon;
