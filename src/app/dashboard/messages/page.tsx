"use client";

import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import MessagesContent from "./content";

export default function MessagesPage() {
  return (
    <Suspense fallback={
      <div className="flex h-full items-center justify-center rounded-[24px] bg-white shadow-sm">
        <Loader2 size={24} className="animate-spin text-[#9A9A9A]" />
      </div>
    }>
      <MessagesContent />
    </Suspense>
  );
}
