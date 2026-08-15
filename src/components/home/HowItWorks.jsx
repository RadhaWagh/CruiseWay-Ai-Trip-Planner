const steps = [
  {
    number: "01",
    icon: "📍",
    title: "Choose Your Destination",
    description:
      "Tell CruiseWay where you want to go and start planning your journey.",
  },
  {
    number: "02",
    icon: "⚙️",
    title: "Customize Your Trip",
    description:
      "Set your travel dates, budget, interests and preferred activities.",
  },
  {
    number: "03",
    icon: "🤖",
    title: "Let AI Plan",
    description:
      "Our AI creates a personalized itinerary based on your preferences.",
  },
  {
    number: "04",
    icon: "✈️",
    title: "Enjoy Your Journey",
    description:
      "Follow your itinerary, explore new places and enjoy your trip.",
  },
];

function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6 pb-32">
      <h2 className="text-4xl font-bold text-center text-white">
        How CruiseWay Works
      </h2>

      <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
        Plan your perfect journey in just a few simple steps.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gray-700 z-0"></div>

        {steps.map((step) => (
          <div
            key={step.number}
            className="relative z-10 bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700 p-8 text-center hover:-translate-y-2 hover:border-blue-500 hover:bg-gray-800 transition duration-300"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg shadow-blue-500/30">
              {step.icon}
            </div>

            <h3 className="text-2xl font-bold text-white">
              {step.title}
            </h3>

            <p className="text-gray-400 mt-4">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;