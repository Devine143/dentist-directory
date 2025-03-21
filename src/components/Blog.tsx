import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'The Importance of Regular Dental Check-ups',
    excerpt: 'Learn why maintaining regular dental visits is crucial for your oral health...',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80',
    date: 'March 15, 2025'
  },
  {
    id: 2,
    title: 'Understanding Different Types of Dental Procedures',
    excerpt: 'A comprehensive guide to common dental procedures and what to expect...',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80',
    date: 'March 10, 2025'
  },
  {
    id: 3,
    title: 'Tips for Maintaining Optimal Oral Health',
    excerpt: 'Expert advice on keeping your teeth and gums healthy between dental visits...',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80',
    date: 'March 5, 2025'
  }
];

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dental Health Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-500">{post.date}</p>
              <h2 className="mt-2 text-xl font-semibold text-gray-900">
                {post.title}
              </h2>
              <p className="mt-3 text-gray-600">{post.excerpt}</p>
              <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                Read more →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;