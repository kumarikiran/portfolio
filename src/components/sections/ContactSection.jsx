import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto px-4">

        <div className="bg-white rounded-lg shadow-md p-8">
          <form 
            action={`mailto:kiran.asha.kumari@gmail.com`}
            method="POST"
            encType="text/plain"
            className="space-y-6 font-inter"
          >
            {/* Name Input */}
            <div>
              <label 
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1 tracking-wide"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-md
                         text-gray-800 bg-gray-50
                         focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400
                         font-light text-base"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label 
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1 tracking-wide"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-md
                         text-gray-800 bg-gray-50
                         focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400
                         font-light text-base"
                placeholder="Enter your email"
              />
            </div>

            {/* Subject Input */}
            <div>
              <label 
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1 tracking-wide"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-md
                         text-gray-800 bg-gray-50
                         focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400
                         font-light text-base"
                placeholder="Enter subject"
              />
            </div>

            {/* Message Input */}
            <div>
              <label 
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1 tracking-wide"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-md
                         text-gray-800 bg-gray-50 resize-none
                         focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400
                         font-light text-base"
                placeholder="Enter your message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-8 py-2.5 bg-gray-800 text-white rounded-md
                         hover:bg-gray-700 transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2
                         font-medium tracking-wide text-sm"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Direct Email */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-gray-600 font-inter font-light">
              Or email me directly at:{' '}
              <a 
                href="mailto:kiran.asha.kumari@gmail.com"
                className="text-gray-800 hover:underline font-normal"
              >
                kiran.asha.kumari@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;