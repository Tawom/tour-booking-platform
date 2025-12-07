import Link from "next/link";
import Image from "next/image";
import { Tour } from "@/types/tour";

/**
 * Props (properties) that this component accepts
 * Think of props as arguments passed to a function
 */
interface TourCardProps {
  tour: Tour; // We pass a single Tour object to display
}

/**
 * TourCard Component
 * Displays a tour in a card format with image, details, and a link
 */
export default function TourCard({ tour }: TourCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Tour Image */}
      <div className="relative h-48 w-full">
        <Image
          src={tour.images[0]}
          alt={tour.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Difficulty Badge */}
        <div className="absolute top-2 right-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
              tour.difficulty === "easy"
                ? "bg-green-500"
                : tour.difficulty === "moderate"
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          >
            {tour.difficulty.charAt(0).toUpperCase() + tour.difficulty.slice(1)}
          </span>
        </div>
      </div>

      {/* Tour Details */}
      <div className="p-4">
        {/* Location */}
        <p className="text-sm text-gray-500 mb-1">
          📍 {tour.location.city}, {tour.location.country}
        </p>

        {/* Tour Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {tour.name}
        </h3>

        {/* Short Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {tour.shortDescription}
        </p>

        {/* Tour Stats */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <span>⏱️</span>
            <span>{tour.duration} days</span>
          </div>
          <div className="flex items-center gap-1">
            <span>👥</span>
            <span>Max {tour.maxGroupSize}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>⭐</span>
            <span>
              {tour.rating} ({tour.reviewCount})
            </span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <p className="text-sm text-gray-500">From</p>
            <p className="text-2xl font-bold text-blue-600">${tour.price}</p>
          </div>
          <Link
            href={`/tours/${tour.id}`}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
