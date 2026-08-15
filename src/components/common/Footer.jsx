function Footer() {
  return (
    <footer className="border-t border-blue-500/30 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* CruiseWay */}
          <div>
            <h2 className="text-3xl font-extrabold text-white">
              🚗 CruiseWay
            </h2>

            <p className="text-gray-400 mt-4 max-w-sm">
              Your AI-powered travel companion for planning unforgettable
              journeys with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition">
                Home
              </li>

              <li className="hover:text-white transition">
                About
              </li>

              <li className="hover:text-white transition">
                Plan Trip
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Explore
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition">
                Popular Destinations
              </li>

              <li className="hover:text-white transition">
                How It Works
              </li>

              <li className="hover:text-white transition">
                Testimonials
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">
                Connect With Us
              </h4>

              <div className="flex gap-3">
                <button className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition">
                  f
                </button>

                <button className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition">
                  𝕏
                </button>

                <button className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition">
                  in
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-700/50 text-center">
          <p className="text-gray-400 text-sm mb-3">
            Plan smarter. Travel better. 🚗🌍
          </p>
          <p className="text-gray-500 text-sm">
            © 2026 CruiseWay. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;