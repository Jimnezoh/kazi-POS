import React from "react";

function FeaturesTwoCardOne({
  title,
  description,
  buttonUrl,
  image,
  isRight = true,
}) {
  return (
    <div
      className={` flex ${
        isRight ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-[8px] md:gap-[10px] flex-col-reverse `}
    >
      <div className="rounded-[25px] bg-[#D80000] py-[60px] px-[20px] md:px-[69px] w-full lg:w-[644px] h-[484px] 2xl:w-[950px]">
        <div className="text-[#FEE0DA] font-inter font-semibold text-[28px] xl:text-[48px]">
          {title}
        </div>
        <div className="text-[16px] md:text-[18px] font-inter text-[#FFFFFF] mt-[40px]">
          {description}
        </div>
        <div className="mt-[68px] flex text-center items-center gap-[10px] text-[#FFFFFF] text-[16px] leading-[28px] font-inter ">
          <a href={buttonUrl}>Get Started Today</a>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.30004 0.899902L5.04004 2.2499L11.7 8.9999L5.04004 15.7499L6.30004 17.0999L14.4 8.9999L6.30004 0.899902Z"
              fill="#FEE0DA"
            />
          </svg>
        </div>
      </div>
      <div className="rounded-[25px] w-full lg:w-[644px] h-[484px] 2xl:w-[950px]">
        <img
          src={image}
          alt={title}
          className="rounded-[25px] w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default FeaturesTwoCardOne;
