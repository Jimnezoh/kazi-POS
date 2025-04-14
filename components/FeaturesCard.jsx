import React from "react";

function FeaturesCard({ title, description, image, isRight = true }) {
  return (
    <div
      className={`flex flex-col-reverse ${
        isRight ? "lg:flex-row" : "lg:flex-row-reverse"} justify-between items-start gap-[20px] max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-[30px] xl:mb-[75px] lg:gap-[230px] xl:gap-[253px] 2xl:gap-[270px]`}
    >
      {/* Text section */}
      <div className="w-full lg:w-[600px] mb-6 lg:mb-[60px] xl:w-[641px]">
        <div className="text-[28px] sm:text-[32px] lg:text-[36px] text-[#540A06] leading-[120%] font-inter font-medium mb-4 xl:mb-[31px]">
          {title}
        </div>
        <div className="text-[16px] sm:text-[18px] text-[#000000]">
          {description}
        </div>
      </div>

      {/* Image section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-full max-w-[415px] md:max-w-[500px] 2xl:max-w-[600px] object-contain"
        />
      </div>
    </div>
  );
}

export default FeaturesCard;
