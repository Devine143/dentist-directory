import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Bluetooth as Tooth, Menu, X } from "lucide-react";
import DentistList from "./components/DentistList";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ";
import DentistDetail from "./components/DentistDetail";
import Hero from "./components/Hero";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <Tooth className="h-8 w-8 text-blue-600" />
                  <span className="ml-2 text-xl font-bold text-gray-900">
                    Cape Town Dental
                  </span>
                </Link>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition-colors"
                >
                  Dentists
                </Link>
                <Link
                  to="/blog"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition-colors"
                >
                  Blog
                </Link>
                <Link
                  to="/faq"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition-colors"
                >
                  FAQ
                </Link>
              </div>

              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-blue-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dentists
                </Link>
                <Link
                  to="/blog"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/faq"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
              </div>
            </div>
          )}
        </nav>

        <main className="mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <DentistList />
                </>
              }
            />
            <Route path="/dentist/:slug" element={<DentistDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>

        <footer className="bg-white mt-12">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center">
                  <Tooth className="h-6 w-6 text-blue-600" />
                  <span className="ml-2 text-lg font-bold text-gray-900">
                    Cape Town Dental
                  </span>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Find the best dental care in Cape Town with our comprehensive
                  directory of qualified dentists.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Quick Links
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      to="/"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      Find a Dentist
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      Dental Health Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faq"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Contact
                </h3>
                <ul className="mt-4 space-y-2">
                  <li className="text-sm text-gray-600">
                    <a
                      href="mailto:info@capetowndental.com"
                      className="hover:text-blue-600"
                    >
                      info@capetowndental.com
                    </a>
                  </li>
                  <li className="text-sm text-gray-600">
                    <a href="tel:+27215550123" className="hover:text-blue-600">
                      +27 21 555 0123
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-sm text-gray-500">
                © 2025 Cape Town Dental Directory. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
