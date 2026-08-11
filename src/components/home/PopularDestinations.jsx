import Bali from "../../assets/images/Bali.jpg";
import Dubai from "../../assets/images/Dubai.jpg";
import Goa from "../../assets/images/Goa.jpg";
import Paris from "../../assets/images/Paris.jpg";
import SwissAlps from "../../assets/images/SwissAlps.jpg";
import Tokyo from "../../assets/images/Tokyo.jpg";

const destinations = [
    {
        name: "Goa",
        country: "India",
        image: Goa ,
        description: "Beautiful beaches, vibrant nightlife and unforgettable coastal adventures.",
    },
    {
        name: "Paris",
        country: "France",
        image: Paris ,
        description: "Experience iconic landmarks, art, culture and unforgettable French cuisine.",
    },
    {
        name: "Bali",
        country: "Indonesia",
        image: Bali ,
        description: "Relax among tropical beaches, beautiful temples and stunning natural landscapes.",
    },
    {
        name: "Dubai",
        country: "UAE",
        image: Dubai ,
        description: "Discover luxury, futuristic architecture, desert adventures and world-class attractions.",
    },
    {
        name: "Tokyo",
        country: "Japan",
        image: Tokyo ,
        description: "Explore vibrant streets, traditional culture, technology and incredible Japanese food.",
    },
    {
        name: "Swiss Alps",
        country: "Switzerland",
        image: SwissAlps ,
        description: "Enjoy breathtaking mountain views, peaceful villages and unforgettable alpine adventures.",
    },
];
function PopularDestinations() {
    return (
        <section className="max-w-7xl mx-auto py-24 px-6 pb-32">
            <h2 className="text-4xl font-bold text-centre text-white">
                Popular Destinations
            </h2>

            <p className="text-gray-400 text-centre mt-4 max-w-2xl mx-auto">
                Explore trending destinations loved by travelers around the world.
            </p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {destinations.map((destination) => (
                <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700 p-6 text-centre hover:scale-105 hover:-translate-y-2 hover:bg-gray-700 transition duration-300 cursor-pointer">

                    <div className="mb-6 overflow-hidden rounded-xl relative">
                    <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-56 object-cover rounded-xl hover:scale-105 transition duration-500"/>
                        <div className="absolute insert-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>

                         <div className="absolute bottom-4 left-4">
                            <h3 className="text-2xl font-bold text-white">
                              {destination.name}
                            </h3>
                         </div>
                    </div>

                    <p className="text-gray-400 mt-2">
                       📍 {destination.country}
                    </p>
                    <p className="text-gray-400 mt-3 text-sm">
                        {destination.description}
                    </p>

                    <button className="mt-5 px-5 py-2 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold transition duration-300">
                        Explore 
                    </button>
                </div>
                ))}
            </div>
        </section>
    );
}
export default PopularDestinations