import Image from "next/image";
import { notFound } from "next/navigation";
import { getTourById } from "@/data/tours";
import BookingForm from "@/components/BookingForm";
import Navbar from "@/components/Navbar";
import TourSidebar from "@/components/TourSidebar";
import Footer from "@/components/Footer";

/**
 * Props interface for dynamic route
 * Next.js automatically passes params to the page
 * In Next.js 15+, params is a Promise that must be awaited
 */
interface TourDetailPageProps {
  params: Promise<{
    id: string; // This comes from the [id] folder name
  }>;
}

/**
 * Individual Tour Detail Page
 * Route: /tours/[id] (e.g., /tours/1, /tours/2, etc.)
 *
 * IMPORTANT: This is now an async function because params is a Promise in Next.js 15+
 */
export default async function TourDetailPage({ params }: TourDetailPageProps) {
  // Await the params Promise to get the actual values
  const { id } = await params;

  // Get the tour data based on the ID from the URL
  const tour = getTourById(id);

  // If tour doesn't exist, show 404 page
  if (!tour) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />

      {/* Sidebar */}
      <TourSidebar />

      {/* Main Content with left margin for sidebar */}
      <div className="lg:ml-80">
        {/* Hero Image */}
        <div className="relative h-96 w-full">
          <Image
            src={tour.images[0]}
            alt={tour.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {tour.name}
              </h1>
              <div className="flex flex-wrap gap-4 text-white">
                <span className="flex items-center gap-2">
                  📍 {tour.location.city}, {tour.location.country}
                </span>
                <span className="flex items-center gap-2">
                  ⏱️ {tour.duration} days
                </span>
                <span className="flex items-center gap-2">
                  ⭐ {tour.rating} ({tour.reviewCount} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Tour Details */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Tour Overview
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {tour.description}
                </p>
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Quick Facts
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-gray-500 text-sm">Duration</p>
                    <p className="font-semibold">{tour.duration} days</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Group Size</p>
                    <p className="font-semibold">Max {tour.maxGroupSize}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Difficulty</p>
                    <p className="font-semibold capitalize">
                      {tour.difficulty}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Rating</p>
                    <p className="font-semibold">⭐ {tour.rating}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Reviews</p>
                    <p className="font-semibold">{tour.reviewCount}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Price</p>
                    <p className="font-semibold text-blue-600">${tour.price}</p>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What&apos;s Included
                </h2>
                <ul className="space-y-2">
                  {tour.included.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Not Included */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What&apos;s Not Included
                </h2>
                <ul className="space-y-2">
                  {tour.notIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Gallery */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {tour.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-48 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt={`${tour.name} - Image ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <BookingForm tour={tour} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
