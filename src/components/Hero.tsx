import React from "react";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-blue-600">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
          alt="Modern dental office"
        />
        <div className="absolute inset-0 bg-blue-600 mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Find Your Perfect Dentist in Cape Town
        </h1>
        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
          Browse through our comprehensive directory of qualified dentists. Read
          reviews, compare services, and book your appointment today.
        </p>

        <div className="mt-10 max-w-xl mx-auto">
          <div className="flex rounded-md shadow-lg">
            <div className="relative flex items-stretch flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-l-md pl-10 py-3 sm:text-sm border-gray-300"
                placeholder="Search by name, location, or service..."
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
