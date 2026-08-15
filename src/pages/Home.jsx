import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero"
import Features from "../components/home/Features";
import PopularDestinations from "../components/home/PopularDestinations";
import HowItWorks from "../components/home/HowItWorks";
import Testimonals from "../components/home/Testimonals";
import Footer from "../components/common/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <PopularDestinations />
      <HowItWorks />
      <Testimonals />
      <Footer />
    </div>
  );
}

export default Home;