import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero"
import Features from "../components/home/Features";
import PopularDestinations from "../components/home/PopularDestinations";
import HowItWorks from "../components/home/HowItWorks";

function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <PopularDestinations />
      <HowItWorks />
    </div>
  );
}

export default Home;