const steps = [
  {
    number: "01",
    title: "Choose Your Destination",
    description: "Tell CruiseWay where you want to go and start planning your journey.",
  },
  {
    number: "02",
    title: "Customize Your Trip",
    description: "Set your travel dates, budget, interests and preferred activities.",
  },
  {
    number: "03",
    title: "Let AI Plan",
    description: "Our AI creates a personalized itinerary based on your preferences.",
  },
  {
    number: "04",
    title: "Enjoy Your Journey",
    description: "Follow your itinerary, explore new places and enjoy your trip.",
  },
];


function HowItWorks() {
    return (
        <section className="max-w-7xl mx-auto py-24 px-6">
            <h2 className="text-4xl font-bold text-center text-white">
                How Cruiseway Works
            </h2>

            <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
                Plan your perfect journey in just a few simple steps.
            </p>
        </section>
    )
}