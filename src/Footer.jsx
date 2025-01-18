import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-white py-8 pt-10">
      {/* Divider */}
      <hr className="border-t-2 border-black mb-6" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social Links Section */}
          <div>
            <h3 className="text-black text-xl font-semibold mb-4">i'd love to chat about design, TV Shows, or good food! </h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://instagram.com/Harsha_Kamakshigari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/HarshaKamakshigari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition"
                >
                  Medium
                </a>
              </li>
            </ul>
          </div>
          <p className=" text-right text-gray-600">Designed and Developed by Harsha</p>
          {/* <p className='mt-3 text-right text-gray-600'>&copy; 2025 Harsha Kamakshigari. All rights reserved.<br></br></p> */}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
