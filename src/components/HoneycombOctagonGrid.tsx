"use client";

import React, { useState } from "react";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  rectSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";

type HoneySize = "sm" | "md" | "lg";
type HoneyColor = "red" | "blue" | "green" | "yellow" | "purple" | "gray";

interface Item {
  id: string;
  size: HoneySize;
  color: HoneyColor;
}

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

function HoneyCell({ id, size, color }: Item) {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    clipPath: "polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        "cursor-grab active:cursor-grabbing border border-black shadow-md",
        sizeMap[size],
        colorMap[color]
      )}
    />
  );
}

export default function HoneycombGrid() {
  const [items, setItems] = useState<Item[]>([
    { id: "1", size: "md", color: "red" },
    { id: "2", size: "md", color: "blue" },
    { id: "3", size: "md", color: "green" },
    { id: "4", size: "md", color: "yellow" },
    { id: "5", size: "md", color: "purple" },
    { id: "6", size: "md", color: "gray" },
    { id: "7", size: "md", color: "red" },
    { id: "8", size: "md", color: "blue" },
  ]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setItems((prev) => {
      const oldIndex = prev.findIndex((i) => i.id === active.id);
      const newIndex = prev.findIndex((i) => i.id === over.id);
      return arrayMove(prev, oldIndex, newIndex);
    });
  };

  /* ===== Honeycomb Row Logic ===== */
  const itemsPerRow = 4;
  const rows: Item[][] = [];
  for (let i = 0; i < items.length; i += itemsPerRow) {
    rows.push(items.slice(i, i + itemsPerRow));
  }

  return (
    <div className="p-6 bg-blue-50 rounded-xl shadow-lg">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={items.map((i) => i.id)}
          strategy={rectSortingStrategy}
        >
          <div className="flex flex-col -gap-y-6">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={cn(
                  "flex gap-[-20px]",
                  rowIndex % 2 === 1 && "ml-16"
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
