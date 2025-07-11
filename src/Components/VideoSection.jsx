import React from 'react';

const VideoSection = () => {
  return (
    <div className="w-full px-4 md:px-20 py-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center max-w-[800px] mx-auto mb-10 tracking-wide leading-snug">
        1mdm.com is a leading ecommerce platform that helps SMEs go global
      </h1>

      <div className="flex flex-col md:flex-row gap-10 items-center">
        
        {/* Video */}
        <div className="w-full md:w-1/2">
          <div className=" h-[400px] w-full">
            <iframe
              src="https://www.youtube.com/embed/TN7iJyc5Uks"
              title="YouTube video"
              allowFullScreen
              className="w-full h-full rounded-md shadow-md"
            ></iframe>
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-lg md:text-xl flex flex-col gap-6 md:gap-8">
          <p>Connect with millions of business buyers from around the world.</p>
          <p>Get the tools and know-how to build a successful ecommerce presence for your business.</p>
          <p>Pocket more from each sale, with take rates as low as 0% in some cases.</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
