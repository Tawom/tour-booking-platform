import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * About Page
 * Route: /about
 * Provides information about the TravelXplore company
 */
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About TravelXplore
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Creating unforgettable travel experiences since 2010
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Founded in 2010, TravelXplore began with a simple mission: to make
              extraordinary travel experiences accessible to everyone. What
              started as a small team of passionate travelers has grown into a
              leading tour operator, serving thousands of happy customers from
              around the world.
            </p>
            <p className="mb-4">
              We believe that travel is more than just visiting new
              places—it&apos;s about creating memories, building connections,
              and experiencing the world in ways that transform us. Every tour
              we design is crafted with care, ensuring that our travelers get
              authentic, immersive experiences that go beyond typical tourist
              attractions.
            </p>
            <p>
              Today, we offer over 50 unique tours across six continents, each
              led by expert local guides who are passionate about sharing their
              knowledge and love for their destinations.
            </p>
          </div>
        </div>

        {/* Our Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To inspire and enable travelers to explore the world responsibly,
              creating meaningful connections between cultures while preserving
              the beauty and authenticity of destinations for future
              generations.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Values
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Authentic experiences over tourist traps</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Sustainable and responsible tourism</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Supporting local communities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Safety and comfort for all travelers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose TravelXplore?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Expert Guides
              </h3>
              <p className="text-gray-600">
                All our guides are certified locals with deep knowledge of their
                destinations and passion for sharing their culture.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Small Groups
              </h3>
              <p className="text-gray-600">
                We keep our groups small (max 15 people) to ensure personalized
                attention and minimal environmental impact.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                4.9 Star Rating
              </h3>
              <p className="text-gray-600">
                With over 10,000 happy travelers and a 4.9-star average rating,
                our reputation speaks for itself.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">15</div>
              <div className="text-blue-100">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Destinations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-blue-100">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Join thousands of travelers who have discovered the world with
            TravelXplore
          </p>
          <Link
            href="/tours"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Explore Our Tours
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
