"use client";

import { useState } from "react";
import Hexagon from "./Hexagon";
import HoneycombOctagonGrid from "./HoneycombOctagonGrid";
import { cn } from "@/lib/utils";

export default function HexagonWithHoneycomb() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-start gap-10">
      {/* HEXAGON */}
      <Hexagon onClick={() => setOpen((prev) => !prev)} />

      {/* HONEYCOMB */}
      <div
        className={cn(
          "transition-all duration-500 ease-out",
          open
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-10 pointer-events-none"
        )}
      >
        {open && <HoneycombOctagonGrid />}
      </div>
    </div>
  );
}
