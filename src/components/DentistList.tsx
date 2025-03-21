import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Star } from "lucide-react";
import dentistsData from "../data/dentists.json";

const DentistList = () => {
  // Group dentists by neighborhood
  const dentistsBySuburb = dentistsData.dentists.reduce((acc, dentist) => {
    const suburb = dentist.location.neighborhood || "Other Areas";
    if (!acc[suburb]) {
      acc[suburb] = [];
    }
    acc[suburb].push(dentist);
    return acc;
  }, {} as Record<string, typeof dentistsData.dentists>);

  // Sort suburbs alphabetically
  const sortedSuburbs = Object.keys(dentistsBySuburb).sort();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Available Dentists
      </h2>
      <div className="space-y-12">
        {sortedSuburbs.map((suburb) => (
          <div key={suburb} className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">
              {suburb}
            </h2>
            <div className="space-y-6">
              {dentistsBySuburb[suburb].map((dentist) => (
                <Link
                  key={dentist.id}
                  to={`/dentist/${dentist.slug}`}
                  className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between border-b pb-4 mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {dentist.name}
                      </h3>
                      <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-md">
                        <Star className="h-5 w-5 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium text-gray-700">
                          {dentist.ratings.overall_rating} (
                          {dentist.ratings.total_ratings} reviews)
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                        {dentist.location.address}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Phone className="h-4 w-4 mr-2 text-blue-500" />
                        {dentist.contact.phone}
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {dentist.services.map((service) => (
                          <span
                            key={service}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-gray-600">
                      {dentist.description}
                    </p>

                    {dentist.reviews.positive && (
                      <div className="mt-4 bg-green-50 p-4 rounded-lg">
                        <p className="text-sm text-green-800 italic">
                          "{dentist.reviews.positive.text}"
                        </p>
                      </div>
                    )}

                    <div className="mt-4 pt-3 border-t text-right">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-blue-50 text-blue-700 hover:bg-blue-100">
                        View Details →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DentistList;
