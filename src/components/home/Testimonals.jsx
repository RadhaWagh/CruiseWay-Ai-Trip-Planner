const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Travel Enthusiast",
    message:
      "CruiseWay made planning my Goa trip incredibly easy. The AI itinerary saved me hours of research.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "Frequent Traveler",
    message:
      "I loved how quickly CruiseWay created a personalized itinerary based on my budget and interests.",
    rating: 5,
  },
  {
    name: "Rohan Patil",
    role: "Adventure Traveler",
    message:
      "The whole experience feels simple and organized. CruiseWay is definitely something I would use again.",
    rating: 4,
  },
];

function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6 pb-32">
      <h2 className="text-4xl font-bold text-center text-white">
        What Travelers Say
      </h2>

      <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
        See how CruiseWay helps travelers plan better journeys.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700 p-8 hover:-translate-y-2 hover:border-blue-500 transition duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg mb-4">
              {testimonial.name.charAt(0)}
            </div>

            <div className="text-yellow-400 text-xl mb-4">
              {"⭐".repeat(testimonial.rating)}
            </div>

            <div>
              <div className="text-blue-500 text-4xl font-bold leading-none mb-2">
                "
              </div>

              <p className="text-gray-300 leading-relaxed">
                {testimonial.message}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold text-white">
                {testimonial.name}
              </h3>

              <div className="flex items-center gap-2 mt-1">
                <p className="text-gray-500 text-sm">
                  {testimonial.role}
                </p>

                <span className="text-green-400 text-xs font-semibold">
                  ✓ Verified Traveler
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;