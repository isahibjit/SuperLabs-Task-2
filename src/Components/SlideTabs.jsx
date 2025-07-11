import { useState } from "react";
import { SLIDEINFO } from "../Constants/Slide";

export default function SlideTabs() {
  const [activeIndex, setActiveIndex] = useState(3); // Default to "Customers support"

  return (
    <div className="flex flex-col md:flex-row gap-6 mt-10 px-10 xl:px-32">
      {/* Sidebar Tabs */}
      <div className="md:w-1/7 text-gray-500">
        <div className="flex flex-col gap-1 border-l">
          {SLIDEINFO.map((item, index) => (
            <div
              key={item.Name}
              className="flex items-stretch  hover:bg-blue-100 cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              {/* Red vertical bar */}
              <div
                className={`w-1 ${
                  activeIndex === index ? "bg-red-600" : "bg-transparent"
                }`}
              ></div>

              <button
                className={`text-left text-xl cursor-pointer font-semibold w-full px-4 py-2 transition-colors duration-200 ${
                  activeIndex === index
                    ? "text-red-600 font-semibold"
                    : "text-gray-700 hover:text-red-500"
                }`}
              >
                {item.Name}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Content Display */}
      <div className="md:w-4/5 flex items-start">
        <div className="flex flex-col lg:flex-row items-start gap-8 w-full">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              {SLIDEINFO[activeIndex].title}
            </h1>
            <p className="text-gray-700 mt-6 text-lg leading-relaxed">
              {SLIDEINFO[activeIndex].description}
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src={SLIDEINFO[activeIndex].imgSrc}
              alt={SLIDEINFO[activeIndex].Name}
              className="w-full max-h-96 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
