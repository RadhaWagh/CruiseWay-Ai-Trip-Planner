const features = [
    {
        title: "AI Itinerary Generator",
        description: "Generate a complete day-by-day travel itinerary in seconds using AI.",
        icon: "🤖",
    },
    {
      title: "Smart Budget Planner",
      description: "Estimate trip expenses and manage your travel budget easily.",
      icon: "💰",
    },
    {
      title: "Weather Forecast",
      description: "Get live weather updates before and during your journey.",
      icon: "🌤️",
    },
    {
      title: "Hotel Recommendations",
      description: "Discover the best hotels based on your budget and preferences.",
      icon: "🏨",
    },
    {
      title: "Restaurant Suggestions",
      description: "Find popular restaurants and local food spots instantly.",
      icon: "🍽️",
    },
    {
      title: "Interactive Maps",
      description: "Explore destinations using integrated maps and nearby attractions.",
      icon: "🗺️",
    },
];

function Features() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-white">
        Why Choose CruiseWay?
      </h2>

      <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
        Everything you need to plan your perfect trip, powered by Artificial Intelligence.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
        <div className=" bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-lg p-8 text-center hover:scale-105 hover:bg-gray-700 transition duration-300 cursor-pointer h-full">

          <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 flex items-center justify-center text-3xl mb-6">
            {feature.icon}
          </div>

          <h3 className="text-2xl font-bold text-white">
            {feature.title}
          </h3>

          <p className="text-gray-400 mt-4">
            {feature.description}
          </p>

        </div>
        ))}
      </div>
    </section>
  );
}

export default Features;