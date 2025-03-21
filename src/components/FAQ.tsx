import React from 'react';

const faqs = [
  {
    question: 'How often should I visit the dentist?',
    answer: 'It is recommended to visit your dentist for a check-up and cleaning every 6 months. However, some people may need more frequent visits depending on their oral health needs.'
  },
  {
    question: 'What dental insurance is accepted by Cape Town dentists?',
    answer: 'Most dentists in Cape Town accept major medical aid schemes. However, coverage varies by practice and plan. It\'s best to contact the dental practice directly to confirm acceptance of your specific insurance.'
  },
  {
    question: 'How do I choose the right dentist?',
    answer: 'Consider factors such as location, services offered, experience, patient reviews, and whether they accept your insurance. It\'s also important to feel comfortable with the dentist and their team.'
  },
  {
    question: 'What should I do in case of a dental emergency?',
    answer: 'Many dentists in Cape Town offer emergency services. Contact your dentist immediately or visit the nearest emergency dental clinic. Keep emergency contact numbers handy and know which practices offer after-hours care.'
  }
];

const FAQ = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;