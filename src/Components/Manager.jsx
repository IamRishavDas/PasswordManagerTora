import React from 'react';

const Manager = () => {
  return (
    <>
      {/* Background Design */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

      {/* Main Container */}
      <div className="container mx-auto max-w-7xl p-10 mt-10">

        {/* Stylish Image */}
        <div className="relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
          <img 
            src="https://www.pngmart.com/files/22/Password-PNG-Transparent.png" 
            alt="Password Manager"
            className="w-96 h-auto m-auto object-cover rounded-lg border-gray-800 transition-all duration-300"
          />
        </div>

        {/* Input Fields */}
        <div className="text-gray-300 flex flex-col space-y-6 mt-10">
          <input 
            type="text" 
            placeholder="Enter Website URL or Name" 
            className="w-full px-5 py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-3xl  focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
          />
          
          <div className="flex gap-4">
            <input 
              type="text" 
              placeholder="Enter User Name" 
              className="w-full px-5 py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
            <input 
              type="password" 
              placeholder="Enter Password" 
              className="w-full px-5 py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-3xl   focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <button className="w-full py-3 bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded-3xl shadow-md transition duration-300 transform hover:scale-105">
            Save
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Manager;
