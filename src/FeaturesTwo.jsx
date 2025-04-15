import React from "react";
import FeaturesTwoCardOne from "../components/FeaturesTwoCardOne";
import FeaturesTwoCardTwo from "../components/FeaturesTwoCardTwo";

function FeaturesTwo() {
  return (
    <div className="bg-[#FFFFFF] pt-[40px]  lg:pb-[40px] 2xl:pb-[70px] px-[30px] md:px-[64px] ">
      <div className="w-full px-3 sm:px-6 md:px-8 mb-[30px] md:mb-[56px]">
        <div className="gap-[10px] md:pt-[40px] pb-[24px] md:pb-[56px]  text-center font-inter font-semibold text-[36px] sm:text-[42px] md:text-[48px] leading-[120%] text-[#D80000]">
          <p>Learn more about KaziPOS's features</p>
        </div>

        <div className=" mx-auto mt-4 text-[16px] sm:text-[18px] font-inter text-center w-full max-w-[557px] px-4 sm:px-0">
          <p>
            KaziPOS is packed full of features that help you save time and work
            more effectively.
          </p>
        </div>
      </div>

      <div className=" mb-[24px] flex flex-col gap-[16px] md:gap-[24px] ">
        {/* cards  */}
        <FeaturesTwoCardOne
          title="Effortless Transaction Handling"
          description="Handle sales quickly and accurately with KaziPOS. Accept cash, cards, and mobile money like M-Pesa, generate instant digital or printed receipts, and keep your customers moving with fast, error-free transactions."
          buttonUrl="/get-started-today"
          image="/assets/smilingLady.png"
          isRight={true}
        />

        <FeaturesTwoCardOne
          title="Instant Stock Updates"
          description="Stay on top of your inventory with live tracking. KaziPOS updates stock levels as sales happen, sends low-stock alerts, and simplifies reordering—perfect for managing daily essentials or specialty items."
          buttonUrl="/get-started-today"
          image="/assets/manWithTablet.png"
          isRight={false}
        />

        <FeaturesTwoCardOne
          title="Client Engagement Solutions"
          description="Build lasting relationships with loyalty programs, purchase history tracking, and personalized marketing. Send targeted offers via SMS or email to bring customers back again and again."
          buttonUrl="/get-started-today"
          image="/assets/smilingLady.png"
          isRight={true}
        />

        <FeaturesTwoCardOne
          title="Adaptable to Your Business Size"
          description="From solo entrepreneurs to growing enterprises, KaziPOS adapts to your needs. Start with core features and scale up with multi-user access and advanced reporting as your business expands."
          buttonUrl="/get-started-today"
          image="/assets/manWithTablet.png"
          isRight={false}
        />
      </div>
      <div className="flex flex-col items-center text-center mx-auto px-4 sm:px-8">
        <div className="mt-[56px] mb-[41px] text-[#D80000] text-[32px] sm:text-[48px] leading-[120%] font-inter font-semibold">
          <p>Additional Features</p>
        </div>
        <div className="mb-[56px] text-[16px] sm:text-[18px] w-full md:w-[557px] font-inter">
          <p>
            KaziPOS has more capabilities addressing common needs for Kenyan
            businesses and enhancing the value proposition.
          </p>
        </div>
      </div>

      <div className="flex gap-[25px] flex-col lg:flex-row flex-wrap xl:flex-nowrap">
        {/* cards  */}

        <FeaturesTwoCardTwo
          image="/assets/statistics.png"
          title="Insightful Business Analytics"
          description="Unlock data-driven decisions with detailed sales reports, product performance metrics, and customer behavior insights to propel your business forward."
        />

        <FeaturesTwoCardTwo
          image="/assets/receptionist.png"
          title="Uninterrupted Operations"
          description="Keep selling even without internet. KaziPOS’s offline mode syncs data automatically when you’re back online, ideal for areas with spotty connectivity."
        />

        <FeaturesTwoCardTwo
          image="/assets/swipeMachine.png"
          title="Personalized Transaction Records"
          description="Customize receipts with your logo, promotions, or thank-you notes to leave a professional impression with every sale."
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-[#D80000] mt-[56px] rounded-[35px] p-[10px] text-[#FEE0DA]  flex justify-center mx-auto text-center"
        >
          Start Free Today
        </button>
      </div>
    </div>
  );
}

export default FeaturesTwo;
