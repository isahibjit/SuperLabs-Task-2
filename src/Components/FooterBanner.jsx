import React from 'react';

const FooterBanner = () => {
  return (
    <section className="text-center footer-banner">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Ready to Grow Your Business?
      </h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href="pricing.php">
          <button
            type="button"
            className="text-[#e60008] cursor-pointer bg-white border border-[#e60008] hover:bg-[#e60008] hover:text-white transition-all duration-300 text-lg font-semibold px-6 py-3 rounded-full"
          >
            Start Selling
          </button>
        </a>

        <a href="https://wa.me/+919820045154" target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            className="text-white border border-white cursor-pointer hover:bg-white hover:text-red-600   transition-all duration-300 text-lg font-semibold px-6 py-3 rounded-full"
          >
            Chat with Consultant
          </button>
        </a>
      </div>
    </section>
  );
};

export default FooterBanner;
