"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";

interface ToolContentProps {
  title: string;
  children: React.ReactNode;
}

export function ToolContent({ title, children }: ToolContentProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-8 mb-16">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-gray-600" />
          <span className="font-medium text-gray-900">{title}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>

      {isOpen && (
        <div className="mt-4 prose prose-gray max-w-none">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
