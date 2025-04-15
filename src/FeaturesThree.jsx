import React from "react";

function FeaturesThree() {
   
  return (
    <main className="pb-[196px] pt-[86px] px-[20px] md:px-[50px] xl:px-[64px] 2xl:px-[250px]">
      
      <div className="max-w-[815px]">
        <div className=" font-inter font-semibold leading-tight md:leading-[120%] text-[40px] md:text-[64px] text-[#D80000]  ">
                <p>Power Your <br /> Business with KaziPOS</p>
        </div>
        <div className="mt-[40px]  mb-[40px] w-full md:w-[488px] font-inter font-medium text-[18px] leading-[120%] text-[#540A06] ">
                <p>
                One POS to simplify sales, manage stock, and grow your customer
                base
                </p>
        </div>
      </div>

     <section className=" flex justify-between flex-col-reverse gap-7 lg:gap-10 md:flex-row">
     <div className="w-[323px]">
            <div className="mb-[40px] ">
              <div className="flex gap-[10px] text-[16px] leading-[120%] text-[#540A06] mb-[22px] text-center ">
                <Icon/>
                <p>Effortless Transaction Handling</p>
              </div>
              <div className="flex gap-[10px] text-[16px] leading-[120%] text-[#540A06] mb-[22px] text-center ">
               <Icon/>
                <p>Instant Stock Updates</p>
              </div>
              <div className="flex gap-[10px] text-[16px] leading-[120%] text-[#540A06] mb-[22px] text-center ">
                <Icon/>
                <p>Client Engagement Solutions</p>
              </div>
              <div className="flex gap-[10px] text-[16px] leading-[120%] text-[#540A06] mb-[22px] text-center ">
               <Icon/>
                <p>Adaptable to Your Business Size</p>
              </div>
              <div className="flex gap-[10px] text-[16px] leading-[120%] text-[#540A06] mb-[22px] text-center ">
                <Icon/>
                <p>Insightful Business Analytics</p>
              </div>
              <div className="flex gap-[10px] text-[16px] leading-[120%] text-[#540A06] mb-[22px] text-center ">
                <Icon/>
                <p>Uninterrupted Operations</p>
              </div>
              <div className="flex gap-[10px] text-[16px] leading-[120%] text-[#540A06] text-center  ">
                <Icon/>
                <p>Personalized Transaction Records</p>
              </div>
            </div>
            <div className="bg-[#D80000] w-[198px] p-[10px] rounded-[35px] gap-[10px] text-center ">
              <button
                type="submit"
                className="text-[#FEE0DA] text-[16px] font-inter leading-[100%] "
              >
                Get Started Today
              </button>
            </div>
          </div>

          <div className="w-[300px] md:w-[450px] lg:w-[708px] lg:mt-[-90px] ">

          <img
            src="/assets/frontOffice.png"
            alt="FrontOfficeImage"
            className=""
          />
        </div>
     </section>

    </main>
  );
}





export default FeaturesThree;
































































const Icon=()=>{
    return(
    <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
                    fill="#D80000"
                  />
                </svg>
    )
}