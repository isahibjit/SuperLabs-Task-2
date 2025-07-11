import React from 'react';
import Logo from '../assets/Dark-Logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-black text-white">
      <footer className="max-w-[90vw] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-12 px-4 border-t border-gray-700">
        {/* Logo and Intro */}
        <div className='w-[200px] '>
          <img src={Logo} alt="1MDM Logo" className="w-36 mb-4" />
          <p className="text-gray-400  leading-relaxed   text-lg">
            One Medical Devices Marketplace
          </p>
        </div>

        {/* Platform Links */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Platform</h5>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white transition">Sell on 1MDM</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition">Pricing</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition">About Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition">Our Story</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition">Careers</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition">Blog</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition">Brands</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-semibold mb-4">Press Room</h5>
          <ul className="space-y-2 mb-6">
            <li><a href="#" className="text-gray-300 hover:text-white transition">Images & B-roll</a></li>
          </ul>
          <h5 className="text-lg font-semibold mb-4">Policies</h5>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white transition">Terms of Service</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition">Delivery Information</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-semibold mb-4">Reach Us</h5>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white transition">Corporate Information</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>
      </footer>

      {/* Copyright */}
      <section className="text-center text-md py-4 bg-white text-black">
        <p>
          © {currentYear} 1MDM ⚡ by{' '}
          <a
            href="https://www.superlabs.co"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-color duration-300"
          >
            SuperLabs
          </a>
        </p>
      </section>
    </div>
  );
};

export default Footer;
