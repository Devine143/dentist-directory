import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Star } from 'lucide-react';
import dentistsData from '../data/dentists.json';

const DentistList = () => {
  // Group dentists by neighborhood
  const dentistsBySuburb = dentistsData.dentists.reduce((acc, dentist) => {
    const suburb = dentist.location.neighborhood || 'Other Areas';
    if (!acc[suburb]) {
      acc[suburb] = [];
    }
    acc[suburb].push(dentist);
    return acc;
  }, {} as Record<string, typeof dentistsData.dentists>);

  // Sort suburbs alphabetically
  const sortedSuburbs = Object.keys(dentistsBySuburb).sort();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        {sortedSuburbs.map((suburb) => (
          <div key={suburb} className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">{suburb}</h2>
            <div className="space-y-6">
              {dentistsBySuburb[suburb].map((dentist) => (
                <Link
                  key={dentist.id}
                  to={`/dentist/${dentist.slug}`}
                  className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold text-gray-900">{dentist.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400" />
                        <span className="ml-1 text-sm text-gray-600">
                          {dentist.ratings.overall_rating} ({dentist.ratings.total_ratings} reviews)
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        {dentist.location.address}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Phone className="h-4 w-4 mr-2" />
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
                        <p className="text-sm text-green-800 italic">"{dentist.reviews.positive.text}"</p>
                      </div>
                    )}
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