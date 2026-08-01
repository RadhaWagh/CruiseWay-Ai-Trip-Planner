import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero"
import Features from "../components/home/Features";

function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default Home;