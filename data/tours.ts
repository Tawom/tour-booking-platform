import { Tour } from "@/types/tour";

/**
 * Sample tour data for the application
 * In a real app, this would come from a database
 */
export const tours: Tour[] = [
  {
    id: "1",
    name: "Bali Beach Paradise",
    description:
      "Experience the magic of Bali with pristine beaches, ancient temples, and vibrant culture. This comprehensive tour takes you through the best of what Bali has to offer, from the famous rice terraces of Tegalalang to the sacred Monkey Forest in Ubud. Enjoy traditional Balinese dance performances, visit stunning waterfalls, and relax on world-class beaches.",
    shortDescription:
      "Explore pristine beaches, ancient temples, and vibrant Balinese culture on this tropical adventure.",
    price: 1299,
    duration: 7,
    maxGroupSize: 15,
    difficulty: "easy",
    location: {
      country: "Indonesia",
      city: "Bali",
      coordinates: {
        lat: -8.3405,
        lng: 115.092,
      },
    },
    images: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
      "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800",
    ],
    rating: 4.8,
    reviewCount: 127,
    startDates: ["2025-01-15", "2025-02-20", "2025-03-10", "2025-04-05"],
    included: [
      "Accommodation in 4-star hotels",
      "All meals",
      "Professional tour guide",
      "Airport transfers",
      "Entrance fees to attractions",
      "Traditional dance show tickets",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Optional activities",
    ],
  },
  {
    id: "2",
    name: "Swiss Alps Adventure",
    description:
      "Journey through the breathtaking Swiss Alps with this unforgettable mountain adventure. Hike through stunning alpine meadows, visit charming mountain villages, and take in panoramic views from the famous Jungfraujoch. Experience the thrill of paragliding, enjoy Swiss chocolate tasting, and ride the iconic Glacier Express train.",
    shortDescription:
      "Hike stunning alpine trails and experience the majestic beauty of the Swiss mountains.",
    price: 2499,
    duration: 10,
    maxGroupSize: 12,
    difficulty: "moderate",
    location: {
      country: "Switzerland",
      city: "Interlaken",
      coordinates: {
        lat: 46.6863,
        lng: 7.8632,
      },
    },
    images: [
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800",
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800",
      "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=800",
    ],
    rating: 4.9,
    reviewCount: 89,
    startDates: ["2025-06-01", "2025-07-15", "2025-08-10", "2025-09-05"],
    included: [
      "Mountain lodge accommodation",
      "Daily breakfast and dinner",
      "Expert mountain guide",
      "All hiking equipment",
      "Jungfraujoch tickets",
      "Glacier Express train ride",
    ],
    notIncluded: [
      "Lunch meals",
      "International flights",
      "Travel insurance",
      "Paragliding experience (optional)",
    ],
  },
  {
    id: "3",
    name: "Tokyo Cultural Experience",
    description:
      "Immerse yourself in the perfect blend of ancient traditions and modern innovation in Tokyo. Visit historic temples and shrines, experience a traditional tea ceremony, explore bustling neighborhoods like Shibuya and Harajuku, and indulge in world-class cuisine. Witness the beauty of cherry blossoms (seasonal) and enjoy a day trip to Mount Fuji.",
    shortDescription:
      "Discover the perfect harmony of ancient traditions and futuristic technology in Japan's capital.",
    price: 1899,
    duration: 8,
    maxGroupSize: 10,
    difficulty: "easy",
    location: {
      country: "Japan",
      city: "Tokyo",
      coordinates: {
        lat: 35.6762,
        lng: 139.6503,
      },
    },
    images: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800",
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800",
    ],
    rating: 4.7,
    reviewCount: 156,
    startDates: ["2025-03-25", "2025-04-10", "2025-10-15", "2025-11-05"],
    included: [
      "Central hotel accommodation",
      "Daily breakfast",
      "English-speaking guide",
      "Temple and shrine entrance fees",
      "Tea ceremony experience",
      "Mount Fuji day trip",
      "Tokyo Metro pass",
    ],
    notIncluded: [
      "Lunch and dinner",
      "International flights",
      "Visa fees",
      "Optional activities",
    ],
  },
  {
    id: "4",
    name: "Patagonia Wilderness Trek",
    description:
      "Embark on an epic journey through one of the world's last great wildernesses. Trek through the stunning landscapes of Torres del Paine National Park, witness massive glaciers, turquoise lakes, and jagged mountain peaks. Spot diverse wildlife including guanacos, condors, and possibly pumas. This challenging trek rewards adventurers with unforgettable views.",
    shortDescription:
      "Trek through dramatic landscapes and witness the raw beauty of Patagonia's wilderness.",
    price: 3299,
    duration: 14,
    maxGroupSize: 8,
    difficulty: "challenging",
    location: {
      country: "Chile",
      city: "Punta Arenas",
      coordinates: {
        lat: -53.1638,
        lng: -70.9171,
      },
    },
    images: [
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800",
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800",
      "https://images.unsplash.com/photo-1609198092357-c6f5ec935311?w=800",
    ],
    rating: 5.0,
    reviewCount: 43,
    startDates: ["2025-12-01", "2026-01-10", "2026-02-15"],
    included: [
      "Camping and refuge accommodation",
      "All meals during trek",
      "Expert trekking guide",
      "Camping equipment",
      "Park entrance fees",
      "Airport transfers",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Personal trekking gear",
      "Accommodation before/after trek",
    ],
  },
  {
    id: "5",
    name: "Santorini Sunset Escape",
    description:
      "Fall in love with the iconic white-washed villages and stunning sunsets of Santorini. Explore the charming towns of Oia and Fira, visit ancient archaeological sites, relax on unique volcanic beaches, and savor delicious Greek cuisine. Take a boat tour to the volcanic islands, enjoy wine tasting at local wineries, and capture unforgettable sunset moments.",
    shortDescription:
      "Experience breathtaking sunsets and pristine white villages on this Greek island paradise.",
    price: 1599,
    duration: 6,
    maxGroupSize: 14,
    difficulty: "easy",
    location: {
      country: "Greece",
      city: "Santorini",
      coordinates: {
        lat: 36.3932,
        lng: 25.4615,
      },
    },
    images: [
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800",
    ],
    rating: 4.8,
    reviewCount: 203,
    startDates: ["2025-05-01", "2025-06-15", "2025-09-01", "2025-10-10"],
    included: [
      "Boutique hotel accommodation",
      "Daily breakfast",
      "Island tour guide",
      "Volcanic island boat tour",
      "Wine tasting at 3 wineries",
      "Archaeological site entrance fees",
    ],
    notIncluded: [
      "Lunch and dinner",
      "International flights",
      "Airport transfers",
      "Personal expenses",
    ],
  },
  {
    id: "6",
    name: "Iceland Northern Lights",
    description:
      "Witness the mesmerizing Aurora Borealis on this magical winter adventure in Iceland. Explore the Golden Circle, relax in the famous Blue Lagoon, visit stunning waterfalls and black sand beaches, and venture inside ice caves. Go on guided Northern Lights hunts, experience the unique Icelandic culture, and enjoy the dramatic volcanic landscapes.",
    shortDescription:
      "Chase the magical Aurora Borealis and explore Iceland's dramatic volcanic landscapes.",
    price: 2199,
    duration: 9,
    maxGroupSize: 12,
    difficulty: "moderate",
    location: {
      country: "Iceland",
      city: "Reykjavik",
      coordinates: {
        lat: 64.1466,
        lng: -21.9426,
      },
    },
    images: [
      "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800",
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800",
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800",
    ],
    rating: 4.9,
    reviewCount: 98,
    startDates: ["2025-11-15", "2025-12-01", "2026-01-15", "2026-02-01"],
    included: [
      "Hotel accommodation",
      "Daily breakfast",
      "Northern Lights tours (3 nights)",
      "Blue Lagoon entrance",
      "Golden Circle tour",
      "Ice cave exploration",
      "4x4 vehicle transportation",
    ],
    notIncluded: [
      "Lunch and dinner",
      "International flights",
      "Travel insurance",
      "Winter clothing rental",
    ],
  },
];

/**
 * Helper function to get a tour by ID
 */
export function getTourById(id: string): Tour | undefined {
  return tours.find((tour) => tour.id === id);
}

/**
 * Helper function to get tours by difficulty
 */
export function getToursByDifficulty(difficulty: Tour["difficulty"]): Tour[] {
  return tours.filter((tour) => tour.difficulty === difficulty);
}

/**
 * Helper function to get tours within a price range
 */
export function getToursByPriceRange(min: number, max: number): Tour[] {
  return tours.filter((tour) => tour.price >= min && tour.price <= max);
}
