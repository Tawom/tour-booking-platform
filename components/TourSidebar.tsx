"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { tours } from "@/data/tours";
import { useState } from "react";

/**
 * TourSidebar Component
 * Displays a list of all tours for easy navigation
 * Shows current active tour and allows quick switching
 */
export default function TourSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Extract current tour ID from pathname (e.g., /tours/1 -> "1")
  const currentTourId = pathname.split("/").pop();

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-20 left-4 z-40 bg-blue-600 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700"
        aria-label="Toggle tour sidebar"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-gradient-to-b from-white to-gray-50 border-r border-gray-200 shadow-xl transform transition-transform duration-300 z-30 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">All Tours</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
              aria-label="Close sidebar"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Tour List */}
          <nav className="space-y-3">
            {tours.map((tour) => (
              <Link
                key={tour.id}
                href={`/tours/${tour.id}`}
                onClick={() => setIsOpen(false)}
                className={`block p-4 rounded-xl transition-all border-2 ${
                  currentTourId === tour.id
                    ? "bg-blue-600 text-white shadow-lg border-blue-600 scale-105"
                    : "bg-white text-gray-700 hover:bg-blue-50 border-gray-200 hover:border-blue-300 hover:shadow-md"
                }`}
              >
                <div className="font-semibold mb-1">{tour.name}</div>
                <div
                  className={`text-sm flex items-center gap-2 ${
                    currentTourId === tour.id
                      ? "text-blue-100"
                      : "text-gray-500"
                  }`}
                >
                  <span>📍 {tour.location.country}</span>
                  <span>•</span>
                  <span>${tour.price}</span>
                </div>
                <div
                  className={`text-xs mt-1 ${
                    currentTourId === tour.id
                      ? "text-blue-100"
                      : "text-gray-400"
                  }`}
                >
                  {tour.duration} days • {tour.difficulty}
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20 top-16"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
