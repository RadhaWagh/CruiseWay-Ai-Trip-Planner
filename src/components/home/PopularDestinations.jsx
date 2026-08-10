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
        image: Goa
    },
    {
        name: "Paris",
        country: "France",
        image: Paris
    },
    {
        name: "Bali",
        country: "Indonesia",
        image: Bali
    },
    {
        name: "Dubai",
        country: "UAE",
        image: Dubai
    },
    {
        name: "Tokyo",
        country: "Japan",
        image: Tokyo
    },
    {
        name: "Swiss Alps",
        country: "Switzerland",
        image: SwissAlps
    },
];
function PopularDestinations() {
    return (
        <section className="max-w-7xl mx-auto py-24 px-6">
            <h2 className="text-4xl font-bold text-centre text-white">
                Popular Destinations
            </h2>

            <p className="text-gray-400 text-centre mt-4 max-w-2xl mx-auto">
                Explore trending destinations loved by travelers around the world.
            </p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {destinations.map((destination) => (
                <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-lg p-6 text-centre hover:scale-105 hover:bg-gray-700 transition duration-300 cursor-pointer">

                    <div className="mb-6">
                    <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-48 object-cover rounded-xl"/>
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                        {destination.name}
                    </h3>
                    <p className="text-gray-400 mt-2">
                        {destination.country}
                    </p>
                </div>
                ))}
            </div>
        </section>
    );
}
export default PopularDestinations