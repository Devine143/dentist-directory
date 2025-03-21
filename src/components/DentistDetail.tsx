import React from "react";
import { useParams } from "react-router-dom";
import { MapPin, Phone, Globe, Star } from "lucide-react";
import dentistsData from "../data/dentists.json";

const DentistDetail = () => {
  const { slug } = useParams();
  const dentist = dentistsData.dentists.find((d) => d.slug === slug);

  if (!dentist) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center">Dentist not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-start justify-between">
            <h1 className="text-3xl font-bold text-gray-900">{dentist.name}</h1>
            <div className="flex items-center">
              <Star className="h-6 w-6 text-yellow-400" />
              <span className="ml-2 text-lg font-semibold text-gray-900">
                {dentist.ratings.overall_rating}
              </span>
              <span className="ml-1 text-sm text-gray-500">
                ({dentist.ratings.total_ratings} reviews)
              </span>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center text-gray-500">
              <MapPin className="h-5 w-5 mr-2" />
              {dentist.location.address}
            </div>
            <div className="flex items-center text-gray-500">
              <Phone className="h-5 w-5 mr-2" />
              {dentist.contact.phone}
            </div>
            {dentist.contact.website && (
              <div className="flex items-center text-gray-500">
                <Globe className="h-5 w-5 mr-2" />
                <a
                  href={dentist.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {dentist.contact.website}
                </a>
              </div>
            )}
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">Services</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {dentist.services.map((service) => (
                <span
                  key={service}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">About</h2>
            <p className="mt-4 text-gray-600">{dentist.description}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">Reviews</h2>
            <div className="mt-4 space-y-6">
              {dentist.reviews.positive.text && (
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800">
                    {dentist.reviews.positive.text}
                  </p>
                  <div className="mt-2 flex items-center">
                    <Star className="h-4 w-4 text-green-600" />
                    <span className="ml-1 text-sm text-green-600">
                      {dentist.reviews.positive.rating}
                    </span>
                  </div>
                </div>
              )}
              {dentist.reviews.negative.text && (
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-red-800">
                    {dentist.reviews.negative.text}
                  </p>
                  <div className="mt-2 flex items-center">
                    <Star className="h-4 w-4 text-red-600" />
                    <span className="ml-1 text-sm text-red-600">
                      {dentist.reviews.negative.rating}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentistDetail;
