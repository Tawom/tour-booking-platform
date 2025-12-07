"use client"; // This makes it a Client Component - needed for interactivity!

import { useState } from "react";
import { Tour } from "@/types/tour";

/**
 * Props for the BookingForm component
 */
interface BookingFormProps {
  tour: Tour;
}

/**
 * BookingForm Component
 * An interactive form that manages booking state and user input
 */
export default function BookingForm({ tour }: BookingFormProps) {
  // STATE: Form data that can change
  const [selectedDate, setSelectedDate] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [isBooking, setIsBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // COMPUTED VALUE: Calculate total price based on number of people
  const totalPrice = tour.price * numberOfPeople;

  /**
   * Validate form inputs
   * Returns true if valid, false if there are errors
   */
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!customerName.trim()) {
      newErrors.name = "Name is required";
    }

    if (!customerEmail.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!selectedDate) {
      newErrors.date = "Please select a date";
    }

    if (numberOfPeople < 1 || numberOfPeople > tour.maxGroupSize) {
      newErrors.people = `Number must be between 1 and ${tour.maxGroupSize}`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page refresh

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Start booking process
    setIsBooking(true);

    // Simulate API call (in real app, this would send data to a server)
    setTimeout(() => {
      setIsBooking(false);
      setBookingSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setBookingSuccess(false);
        setCustomerName("");
        setCustomerEmail("");
        setSelectedDate("");
        setNumberOfPeople(1);
      }, 3000);
    }, 1500);
  };

  // If booking is successful, show success message
  if (bookingSuccess) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold text-green-600 mb-2">
            Booking Confirmed!
          </h3>
          <p className="text-gray-600 mb-4">
            Thank you, {customerName}! We&apos;ve sent confirmation details to{" "}
            {customerEmail}.
          </p>
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>Tour:</strong> {tour.name}
            </p>
            <p className="text-sm text-grey-700">
              <strong>Date:</strong>{" "}
              {new Date(selectedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-sm text-gray-700">
              <strong>People:</strong> {numberOfPeople}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Total:</strong> ${totalPrice.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Main booking form
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
      <div className="mb-6">
        <p className="text-gray-500 text-sm mb-1">Price per person</p>
        <p className="text-4xl font-bold text-blue-600">${tour.price}</p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Customer Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-600 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Customer Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-600 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Available Dates */}
        <div className="mb-4">
          <label
            htmlFor="start-date"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Select Start Date *
          </label>
          <select
            id="start-date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 ${
              errors.date ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="" className="text-gray-600">
              Choose a date
            </option>
            {tour.startDates.map((date, index) => (
              <option key={index} value={date} className="text-gray-900">
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </option>
            ))}
          </select>
          {errors.date && (
            <p className="text-red-500 text-xs mt-1">{errors.date}</p>
          )}
        </div>

        {/* Number of People */}
        <div className="mb-6">
          <label
            htmlFor="num-people"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Number of People *
          </label>
          <input
            id="num-people"
            type="number"
            min="1"
            max={tour.maxGroupSize}
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(parseInt(e.target.value) || 1)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 ${
              errors.people ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.people && (
            <p className="text-red-500 text-xs mt-1">{errors.people}</p>
          )}
          <p className="text-xs text-gray-500 mt-1">
            Maximum {tour.maxGroupSize} people
          </p>
        </div>

        {/* Total Price Display */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Total Price:</span>
            <span className="text-2xl font-bold text-blue-600">
              ${totalPrice.toLocaleString()}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {numberOfPeople} {numberOfPeople === 1 ? "person" : "people"} × $
            {tour.price}
          </p>
        </div>

        {/* Book Now Button */}
        <button
          type="submit"
          disabled={isBooking}
          className={`w-full py-3 rounded-lg font-semibold transition-colors mb-4 ${
            isBooking
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {isBooking ? "Processing..." : "Book Now"}
        </button>

        <p className="text-center text-sm text-gray-500">
          Free cancellation up to 24 hours before
        </p>
      </form>
    </div>
  );
}
