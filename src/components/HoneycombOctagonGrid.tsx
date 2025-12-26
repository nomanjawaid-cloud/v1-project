"use client";

import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  rectSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";

/* ================= TYPES ================= */
type HoneySize = "sm" | "md" | "lg";
type HoneyColor = "red" | "blue" | "green" | "yellow" | "purple" | "gray";

type Item = {
  id: string;
  size: HoneySize;
  color: HoneyColor;
};

/* ================= STYLE MAPS ================= */
const sizeMap: Record<HoneySize, string> = {
  sm: "w-24 h-24",
  md: "w-28 h-28",
  lg: "w-32 h-32",
};

const colorMap: Record<HoneyColor, string> = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-400",
  purple: "bg-purple-500",
  gray: "bg-gray-700",
};

/* ================= SINGLE CELL ================= */
function HoneyCell({ id, size, color }: Item) {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    clipPath:
      "polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)",
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className={cn(
        "border border-black shadow-md cursor-grab active:cursor-grabbing",
        sizeMap[size],
        colorMap[color]
      )}
    />
  );
}

/* ================= MAIN GRID ================= */
export default function HoneycombGrid() {
  const [items, setItems] = useState<Item[]>([
    { id: "1", size: "sm", color: "red" },
    { id: "2", size: "md", color: "blue" },
    { id: "3", size: "md", color: "green" },
    { id: "4", size: "md", color: "yellow" },
    { id: "5", size: "md", color: "purple" },
    { id: "6", size: "md", color: "gray" },
    { id: "7", size: "md", color: "yellow" },
    { id: "8", size: "md", color: "purple" },
    { id: "9", size: "md", color: "gray" },
  ]);

  /* ===== CENTER TEXT ===== */
  const [centerText, setCenterText] = useState("Edit me");

  /* ===== DRAG HANDLER ===== */
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setItems((prev) => {
      const oldIndex = prev.findIndex((i) => i.id === active.id);
      const newIndex = prev.findIndex((i) => i.id === over.id);
      return arrayMove(prev, oldIndex, newIndex);
    });
  };

  /* ===== SPLIT INTO ROWS ===== */
  const itemsPerRow = 4;
  const rows: Item[][] = [];

  for (let i = 0; i < items.length; i += itemsPerRow) {
    rows.push(items.slice(i, i + itemsPerRow));
  }

  return (
    <div className="relative p-8 bg-blue-50 rounded-xl shadow-lg">
      {/* ===== CENTER EDITABLE TEXT ===== */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <input
          value={centerText}
          onChange={(e) => setCenterText(e.target.value)}
          className="pointer-events-auto text-center text-xl font-semibold bg-white/80 border rounded px-4 py-2"
        />
      </div>

      {/* ===== DRAG GRID ===== */}
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={items.map((i) => i.id)}
          strategy={rectSortingStrategy}
        >
          <div className="flex flex-col gap-[-24px] items-center">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={cn(
                  "flex gap-[-20px]",
                  rowIndex % 2 === 1 && "ml-14"
                )}
              >
                {row.map((item) => (
                  <HoneyCell key={item.id} {...item} />
                ))}
              </div>
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
