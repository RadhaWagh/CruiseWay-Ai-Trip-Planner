import { useState } from "react";

function Planner() {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("");
  const [interests, setInterests] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tripPlan, setTripPlan] = useState(null);

  const handleGenerateTrip = async () => {
    if (
      !destination ||
      !startDate ||
      !endDate ||
      !budget ||
      !interests ||
      !travelers
    ) {
      setError("Please fill in all the trip details.");
      return;
    }

    if (new Date(endDate) < new Date(startDate)) {
      setError("End date must be after the start date.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://cruiseway-ai-trip-planner.onrender.com/api/generate-trip",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            destination,
            startDate,
            endDate,
            budget,
            interests,
            travelers: Number(travelers),
          }),
        }
      );

      if (!response.ok) {
        let errorMessage = "Failed to generate your trip.";

        try {
          const errorData = await response.json();

          if (errorData.detail) {
            errorMessage = errorData.detail;
          }
        } catch {
          // Keep the default error message
        }

        throw new Error(errorMessage);
      }

      const data = await response.json();

      console.log("Backend response:", data);

      setTripPlan(data.itinerary);
    } catch (error) {
      console.error("Trip generation error:", error);

      if (error.message.includes("Failed to fetch")) {
        setError(
          "Unable to connect to CruiseWay's server. Please make sure the backend is running."
        );
      } else {
        setError(
          error.message || "Unable to generate your trip. Please try again."
        );
      }
    }
      finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Page Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
          Plan Your Trip
        </h1>

        <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
          Tell CruiseWay about your trip and we'll help you create the
          perfect travel plan.
        </p>

        {/* Trip Form */}
        <div className="mt-12 max-w-2xl mx-auto bg-gray-900/70 border border-gray-700 rounded-2xl p-8">

          {/* Destination */}
          <label className="block text-white font-semibold mb-3">
            Where do you want to go?
          </label>

          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="e.g. Goa, Paris, Bali..."
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
          />

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

            <div>
              <label className="block text-white font-semibold mb-3">
                Start Date
              </label>

              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-3">
                End Date
              </label>

              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition"
              />
            </div>

          </div>

          {/* Budget */}
          <div className="mt-6">
            <label className="block text-white font-semibold mb-3">
              What's your budget?
            </label>

            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition"
            >
              <option value="">Select your budget</option>
              <option value="budget">Budget - Under ₹10,000</option>
              <option value="moderate">
                Moderate - ₹10,000 to ₹30,000
              </option>
              <option value="premium">
                Premium - ₹30,000 to ₹60,000
              </option>
              <option value="luxury">Luxury - ₹60,000+</option>
            </select>
          </div>

          {/* Interests */}
          <div className="mt-6">
            <label className="block text-white font-semibold mb-3">
              What are you interested in?
            </label>

            <input
              type="text"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="e.g. beaches, adventure, food, nightlife..."
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Travelers */}
          <div className="mt-6">
            <label className="block text-white font-semibold mb-3">
              How many travelers?
            </label>

            <input
              type="number"
              min="1"
              max="20"
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-400 text-sm text-center mt-6">
              {error}
            </p>
          )}
          {/* Loading Message */}
          {isLoading && (
            <p className="text-gray-400 text-sm text-center mt-6">
              ✨ CruiseWay is creating your personalized itinerary...
            </p>
          )}

          {/* Generate Button */}
          <button
          type="button"
          onClick={handleGenerateTrip}
          disabled={isLoading}
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-xl transition duration-300 flex items-center justify-center gap-3">
          {isLoading ? (  
            <>
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Creating Your Trip...
            </>
          ) : (
            <>
            ✨ Generate My Trip
            </>
          )}
          </button>

        </div>

        {/* Trip Plan Result */}
        {tripPlan && (
          <div className="mt-10 max-w-5xl mx-auto space-y-6">

            {/* Overview */}
            <div className="bg-gray-900/70 border border-gray-700 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                🌴 Trip Overview
              </h2>

              <p className="text-gray-300 leading-relaxed">
                {tripPlan.overview}
              </p>
            </div>

            {/* Day-by-Day Itinerary */}
            <div className="bg-gray-900/70 border border-gray-700 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                📅 Day-by-Day Itinerary
              </h2>

              <div className="space-y-6">
                {tripPlan.days?.map((day) => (
                  <div
                    key={day.day}
                    className="bg-gray-800/70 border border-gray-700 rounded-2xl p-6 md:p-7 hover:border-blue-500/50 transition duration-300"
                  >
                    <p className="text-blue-400 font-semibold mb-2 uppercase tracking-wide text-sm">
                      Day {day.day} • {day.date}
                    </p>

                    <h3 className="text-2xl font-bold text-white mb-5">
                      {day.title}
                    </h3>

                    <ul className="space-y-3">
                      {day.activities?.map((activity, index) => (
                        <li
                          key={index}
                          className="text-gray-300 flex gap-3"
                        >
                          <span className="text-blue-400">•</span>
                          <span>
                            {activity.replace(/^[-•\s]+/, "")}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Places */}
            <div className="bg-gray-900/70 border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-5">
                📍 Recommended Places
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tripPlan.places?.map((place, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-gray-300"
                  >
                    📍 {place}
                  </div>
                ))}
              </div>
            </div>

            {/* Food */}
            <div className="bg-gray-900/70 border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-5">
                🍴 Food Recommendations
              </h2>

              <div className="space-y-3">
                {tripPlan.food?.map((item, index) => (
                  <div
                    key={index}
                    className="text-gray-300 flex gap-3"
                  >
                    <span>🍽️</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div className="bg-gray-900/70 border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-5">
                🎯 Activities
              </h2>

              <div className="space-y-3">
                {tripPlan.activities?.map((activity, index) => (
                  <div
                    key={index}
                    className="text-gray-300 flex gap-3"
                  >
                    <span>✨</span>
                    <span>{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Tips */}
            <div className="bg-gray-900/70 border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-5">
                💡 Travel Tips
              </h2>

              <div className="space-y-3">
                {tripPlan.tips?.map((tip, index) => (
                  <div
                    key={index}
                    className="text-gray-300 flex gap-3"
                  >
                    <span>💡</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget */}
            {tripPlan.budget && (
              <div className="bg-gray-900/70 border border-gray-700 rounded-2xl p-8">

                <div className="flex items-center gap-3 mb-6">
                  <div className="text-3xl">
                    💰
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Approximate Budget
                    </h2>

                    <p className="text-gray-400 text-sm mt-1">
                      Estimated expenses for your trip
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-5">
                    <p className="text-gray-400 text-sm">
                      🏨 Accommodation
                    </p>

                    <p className="text-white font-semibold text-lg mt-2">
                      {tripPlan.budget.accommodation}
                    </p>
                  </div>

                  <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-5">
                    <p className="text-gray-400 text-sm">
                      🍴 Food & Drinks
                    </p>

                    <p className="text-white font-semibold text-lg mt-2">
                      {tripPlan.budget.food}
                    </p>
                  </div>

                  <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-5">
                    <p className="text-gray-400 text-sm">
                      🛵 Transport
                    </p>

                    <p className="text-white font-semibold text-lg mt-2">
                      {tripPlan.budget.transport}
                    </p>
                  </div>

                  <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-5">
                    <p className="text-gray-400 text-sm">
                      🎯 Activities
                    </p>

                    <p className="text-white font-semibold text-lg mt-2">
                      {tripPlan.budget.activities}
                    </p>
                  </div>

                </div>

                <div className="mt-5 bg-blue-600/20 border border-blue-500/40 rounded-xl p-6">
                  <p className="text-blue-300 text-sm font-medium">
                    Estimated Total
                  </p>

                  <p className="text-white text-3xl font-bold mt-2">
                    {tripPlan.budget.total}
                  </p>
                </div>

              </div>
            )}

          </div>
        )}

      </div>
    </main>
  );
}

export default Planner;