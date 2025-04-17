import React from "react";
import PricingCard from "../components/PricingCard";

function Pricing() {
  return (
    <div  className=" bg-[#FFFFFF] pb-[80px]  md:pb-[120px]  px-[30px]">
      <div className="   mb-[40px] md:mb-[70px] pt-[40px] lg:pt-[70px] justify-between text-center w-full ">
        <div className=" text-[32px] lg:text-[38px] xl:text-[48px] text-[#540A06] font-semibold font-inter leading-[120%] md:mx-auto text-center text-nowrap">
          <p >Affordable Pricing</p>
        </div>
        <div className=" flex text-center items-center md:mx-auto md:w-[229px] gap-[14px]  mt-[20px] md:mt-[40px] justify-center">
          <div className="font-medium text-[20px] leading-[120%] text-[#540A06] ">
            <p>Monthly</p>
          </div>
          <svg
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 7.5C31.3152 7.5 34.4946 8.81696 36.8388 11.1612C39.183 13.5054 40.5 16.6848 40.5 20C40.5 23.3152 39.183 26.4946 36.8388 28.8388C34.4946 31.183 31.3152 32.5 28 32.5H13C9.68479 32.5 6.50537 31.183 4.16116 28.8388C1.81696 26.4946 0.5 23.3152 0.5 20C0.5 16.6848 1.81696 13.5054 4.16116 11.1612C6.50537 8.81696 9.68479 7.5 13 7.5H28ZM13 30C15.6522 30 18.1957 28.9464 20.0711 27.0711C21.9464 25.1957 23 22.6522 23 20C23 17.3478 21.9464 14.8043 20.0711 12.9289C18.1957 11.0536 15.6522 10 13 10C10.3478 10 7.80429 11.0536 5.92893 12.9289C4.05357 14.8043 3 17.3478 3 20C3 22.6522 4.05357 25.1957 5.92893 27.0711C7.80429 28.9464 10.3478 30 13 30Z"
              fill="#D80000"
            />
          </svg>

          <div className="font-medium text-[20px] leading-[120%] text-[#540A06] ">
            <p>Annually</p>
          </div>
        </div>
      </div>
  
    {/* cards */}

      <div className="flex xl:mx-[30px]  flex-col md:flex-row justify-between gap-[20px]  md:flex-wrap lg:flex-row">
        <PricingCard
          title="Basic Plan"
          description="Best for growing businesses"
          price="2,000"
          bgClass="bg-[#7F0808] text-white"
          buttonUrl="/get-started"
          features={[
            "Sales Tracking",
            "Basic Inventory Management",
            "M-Pesa Integration",
            "Basic Sales Reporting",
            "Customer Database",
            "Receipt Options",
            "Support",
          ]}
          className="bg-[#FFFFFF] text-[#540A06]"
          fill="#D80000"
        />

        <PricingCard
          title="Professional Plan "
          description="Medium-sized businesses"
          price="5,000"
          bgClass="bg-[#FFFFFF] text-[#D80000]"
          buttonUrl="/get-started"
          features={[
            "All Basic Plan features",
            "Advanced Sales Reporting",
            "Customer Loyalty Programs",
            "Promotional Tools",
            "Staff Management",
            "Accounting Integration",
          ]}
          className="bg-[#AF0505] text-[#FFFFFF]"
          fill="#FFFFFF"
        />
        

        <PricingCard
          title="Enterprise Plan"
          description="Large enterprises"
          price="10,000"
          bgClass="bg-[#7F0808] text-white"
          buttonUrl="/get-started"
          features={[
            "All Standard Plan features",
            "Multi-Location Management",
            "Advanced Analytics",
            "CRM Integration",
            "Priority Support",
            "Customizable POS Interface",
          ]}
          className="bg-[#FFFFFF] text-[#540A06]"
          fill="#D80000"
        />

      </div>
    </div>
  );
}

export default Pricing;
