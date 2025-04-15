import React from "react";

function PricingCard({
  title,
  description,
  price,
  buttonUrl,
  features,
  className = "",
  fill,
  bgClass = "",
}) {
  return (
    <div
      className={`
    w-full lg:w-[370px] xl:w-[26.7vw] shadow shadow-md shadow-[#0057B840]  px-[20px]  pt-[30px rounded-[20px] ${className} `}
    >
      <div>
        <div>
          <div className="font-semibold text-[24px] leading-[120%] mb-[18px]">
            <p>{title}</p>
          </div>
          <div className="font-inter text-[16px]">
            <p>{description}</p>
          </div>
        </div>
        <div className="text-nowrap font-inter font-bold text-[32px] mt-[27px]">
          <p>Ksh {price}/month</p>
        </div>
      </div>

      <div
        className={`
      ${bgClass} 
      my-[29px] py-[15px] 
      text-center text-nowrap 
      rounded-[10px]
    `}
      >
        <a href={buttonUrl}>Get Started</a>
      </div>

      <div className="font-inter text-[16px] leading-[120%]">
        {features?.map((feature, index) => (
          <div key={index} className="flex gap-[10px] my-[27px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1.66699C5.41666 1.66699 1.66666 5.41699 1.66666 10.0003C1.66666 14.5837 5.41666 18.3337 10 18.3337C14.5833 18.3337 18.3333 14.5837 18.3333 10.0003C18.3333 5.41699 14.5833 1.66699 10 1.66699ZM10 16.667C6.325 16.667 3.33333 13.6753 3.33333 10.0003C3.33333 6.32533 6.325 3.33366 10 3.33366C13.675 3.33366 16.6667 6.32533 16.6667 10.0003C16.6667 13.6753 13.675 16.667 10 16.667ZM13.825 6.31699L8.33333 11.8087L6.175 9.65866L5 10.8337L8.33333 14.167L15 7.50032L13.825 6.31699Z"
                fill={fill}
              />
            </svg>
            <div>
              <p>{feature}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingCard;
