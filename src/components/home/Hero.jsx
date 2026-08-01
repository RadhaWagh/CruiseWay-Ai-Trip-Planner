import heroImage from "../../assets/hero.png";

function Hero() {
    return(
        <section className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center min-h-[80vh] px-6 pt-12">
            <p className="text-blue-400 font-semibold mb-4">
                🌍 AI-Powered Travel Planner
            </p>

            <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight">
                Plan Your <span className="text-blue-500">Dream Trip</span> with AI
            </h1>

            <p className="text-gray-300 text-xl mt-6 max-w-2xl leading-8">
                CruiseWay helps you generate personalised travel itiernaries, 
                discover destinations, and plan unforgettable journeys in minutes.
            </p>

            <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300 hover:scale-105">
                 Start Planning →
            </button>

            <button className="border border-gray-500 hover:border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300">
                Explore Destinations
            </button>
            </div>

            <div className="flex gap-10 mt-12 text-center">
            <div>
                <h2 className="text-3xl font-bold text-white">1000+</h2>
                <p className="text-gray-400">Trips Planned</p>
            </div>

            <div>
                <h2 className="text-3xl font-bold text-white">100+</h2>
                <p className="text-gray-400">Destinations</p>
            </div>

            <div>
                <h2 className="text-3xl font-bold text-white">24/7</h2>
                <p className="text-gray-400">AI Assistance</p>
            </div>
            </div>
            <img
                src={heroImage}
                alt="AI Trip Planner"
                className="mt-12 w-full max-w-4xl rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
                />
            </section>
    );
}
export default Hero