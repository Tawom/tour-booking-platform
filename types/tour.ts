// This file defines the structure of our Tour data

/**
 * Represents a single tour package
 */
export interface Tour {
  id: string; // Unique identifier for the tour
  name: string; // Tour name (e.g., "Bali Beach Paradise")
  description: string; // Full description of the tour
  shortDescription: string; // Brief summary for tour cards
  price: number; // Price in USD
  duration: number; // Duration in days
  maxGroupSize: number; // Maximum number of people
  difficulty: "easy" | "moderate" | "challenging"; // Difficulty level
  location: {
    country: string; // Country name
    city: string; // City or region name
    coordinates: {
      lat: number; // Latitude
      lng: number; // Longitude
    };
  };
  images: string[]; // Array of image URLs
  rating: number; // Average rating (0-5)
  reviewCount: number; // Number of reviews
  startDates: string[]; // Available start dates
  included: string[]; // What's included in the tour
  notIncluded: string[]; // What's NOT included
}

/**
 * Booking information for a tour
 */
export interface Booking {
  id: string;
  tourId: string; // References a Tour
  customerName: string;
  customerEmail: string;
  numberOfPeople: number;
  selectedDate: string;
  totalPrice: number;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: string;
}
