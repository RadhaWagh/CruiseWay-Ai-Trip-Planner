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
  const [tripPlan, setTripPlan] = useState("");

  const handleGenerateTrip = () => {
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

    console.log({
      destination,
      startDate,
      endDate,
      budget,
      interests,
      travelers,
    });

    setTripPlan(
      `Your personalized trip to ${destination} will be generated here.`
    );

    setIsLoading(false);
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

          {/* Generate Button */}
          <button
            type="button"
            onClick={handleGenerateTrip}
            disabled={isLoading}
            className="w-full mt-8 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-xl transition duration-300"
          >
            {isLoading ? "Creating Your Trip..." : "✨ Generate My Trip"}
          </button>

        </div>

        {/* Trip Plan Result */}
        {tripPlan && (
          <div className="mt-10 max-w-4xl mx-auto bg-gray-900/70 border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Your Trip Plan
            </h2>

            <p className="text-gray-300 leading-relaxed">
              {tripPlan}
            </p>
          </div>
        )}

      </div>
    </main>
  );
}

export default Planner;