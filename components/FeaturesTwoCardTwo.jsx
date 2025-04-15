import React from "react";

function FeaturesTwoCardTwo({ image, title, description }) {
  return (
    <div className="shadow-md shadow-[rgb(84,10,6)] rounded-[27px] p-[20px] md:p-[37px] lg:max-w-[41.2vw]  lg:h-[574px]">
      <div className=" flex justify-center items-center   lg:max-h-[26vh] w-full h-full ">
        <img
          src={image}
          alt={title}
          className="rounded-[10px] object-cover w-full h-full"
        />
      </div>
      <div>
        <div className="text-[#D80000]  text-[18px] 2xl:text-[24px] font-inter font-medium leading-[120%] mb-[30px] mt-[28px]">
          <p>{title}</p>
        </div>
        <div className="text-[18px] 2xl:text-[20px] text-[#540A06] font-inter">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesTwoCardTwo;
