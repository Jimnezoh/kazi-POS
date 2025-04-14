import React from "react";
import FeaturesCard from "../components/FeaturesCard";

function Features() {
  return (
    <div className="bg-[#FFFFFF] pt-[60px] md:pt-[162px] pb-[60px] px-[30px] md:px-[61px] md:w-full  ">
      <div className=" mb-[50px] md:mb-[86px] text-[#D80000] text-center leading-[120%] font-inter font-semibold text-[32px] md:text-[64px] ">
        <p>Key Benefits</p>
      </div>
      <div className=" ">
        <FeaturesCard
          title="1. Easy Sales Management"
          description="Simplify your daily transactions with a user-friendly system that speeds up sales and reduces errors. Whether you’re ringing up items, processing payments, or issuing receipts, KaziPOS makes it effortless—saving you time and keeping your customers happy. Perfect for busy Kenyan retailers who need quick, reliable tools at their fingertips."
          image="/assets/saleslady.png"
        />

        <FeaturesCard
          title="2. Real-Time Inventory"
          description="Stay on top of your stock levels with instant updates—no more guesswork or manual counts. KaziPOS tracks what’s in store as sales happen, alerting you when items run low. Ideal for Kenyan shopkeepers managing small grocery stores or bustling market stalls, ensuring you never miss a sale due to stockouts."
          image="/assets/saleslady.png"
          isRight={false}
        />

        <FeaturesCard
          title="3. Customer Tools"
          description="Build stronger customer relationships with features like loyalty programs, purchase tracking, and personalized offers. KaziPOS helps you know your customers better, reward regulars, and keep them coming back. A must-have for Kenyan businesses aiming to stand out in competitive markets like Nairobi or Mombasa."
          image="/assets/saleslady.png"
        />

        <FeaturesCard
          title="4. Scales to Any Business"
          description="Whether you run a roadside kiosk, a mid-sized shop, or a large store, KaziPOS adapts to your needs. It’s flexible enough for startups and powerful enough for growing enterprises, making it the perfect fit for Kenyan businesses of all sizes—from rural vendors to urban chains."
          image="/assets/saleslady.png"
          isRight={false}
        />

        <div className="bg-[#D80000] rounded-[35px] p-[10px] text-center mx-auto mt-[35px] gap-[10px]  w-[198px] font-inter text-[16px] leading-[100%] text-[#FEE0DA]">
          <button type="Submit" className=" ">Get Started</button>
        </div>

      </div>
    </div>
  );
}

export default Features;
