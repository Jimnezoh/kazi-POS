import React from "react";
import Footer from "./footer";

const App = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:w-full  bg-[#FEE0DA] min-h-[100vh]">
      <div className=" mt-[70px] md:mt-[155px] mx-[30px] md:mx[100px] lg:mx[150px] xl:mx-[175px] mb-[50px] md:mb-[183px] md:w-[50vw] xl:w-[421px] 2xl:w-full">
        <div className="text-[#D80000] mb-[50px] md:mb-[91px] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[70px] xl:text-[96px] leading-[120%] font-inter font-semibold">
          <h1>Our locations</h1>
        </div>
        <div className="text-[#540A06] ">
          <div className="flex mb-[11px] gap-[10px] pt-[10px] pb-[10px] w-[124px] h-[49px] items-center">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.4 5.25953C7.89031 3.79902 9.8968 2.98566 11.9834 2.99619C14.0701 3.00673 16.0682 3.84032 17.5437 5.31581C19.0192 6.7913 19.8528 8.78946 19.8633 10.8761C19.8739 12.9627 19.0605 14.9692 17.6 16.4595L13.414 20.6455C13.0389 21.0205 12.5303 21.2311 12 21.2311C11.4697 21.2311 10.9611 21.0205 10.586 20.6455L6.4 16.4595C4.91488 14.9743 4.08057 12.9599 4.08057 10.8595C4.08057 8.75915 4.91488 6.74479 6.4 5.25953Z"
                stroke="#D80000"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M12 13.8594C13.6569 13.8594 15 12.5162 15 10.8594C15 9.20252 13.6569 7.85938 12 7.85938C10.3431 7.85938 9 9.20252 9 10.8594C9 12.5162 10.3431 13.8594 12 13.8594Z"
                stroke="#D80000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-[24px] leading-[120%]">Kenya</p>
          </div>
          <div className="flex flex-col gap-[25px] mb-[50px] text-[20px] font-inter">
            <p>39 Woodvale Grove, Westlands</p>
            <p>Jimkan House</p>
            <p>Nairobi, Kenya</p>
          </div>
        </div>
        <div className="text-[#540A06] ">
          <div className="mb-[11px] font-inter font-medium text-[24px]">
            Contact Information
          </div>
          <div className="font-inter text-[20px]">
            <p className="mb-[25px]">Email: info@kazipos.co.ke</p>
            <p className="flex flex-wrap">
              <span>Phone: +254 113 306358,</span>
              <span> +254 113 305897</span>
            </p>
          </div>
        </div>
      </div>

      <div className=" gap-[10px] py-[65px] px-[30px] md:px-[50px] w-full md:w-[50vw] xl:w-[678px] 2xl:w-full bg-[#FFFFFF] min-h-screen ">
        <form className=" lg:mt-[103.5px]">
          <h1 className=" w-full gap-[41px] text-[#7F0808] font-medium font-inter leading-[120%] text-[32px] lg:text-[40px]">
            Talk to our Experts
          </h1>

          <div className="pt-[41px] flex flex-col gap-[23px] text-[16px] md:text-[20px] xl:text-[25px] font-inter leading-[120%]">
            {/* email */}
            <div className="">
              <input
                type="email"
                className="border border-[#797B86] w-full py-[20px]  pl-[20px] rounded-[10px]"
                placeholder="Work Email Address*"
                required
              />
            </div>

            {/* name? */}
            <div className="flex flex-col lg:flex-row gap-[18px] w-full ">
              <div>
                <input
                  type="text"
                  placeholder="First Name*"
                  className="border w-full py-[20px]  pl-[20px] rounded-[10px] border-[#797B86]"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="border w-full py-[20px]  pl-[20px] rounded-[10px] border-[#797B86]"
                  required
                />
              </div>
            </div>

            {/* phone number */}
            <div>
              <input
                type="text"
                className="border w-full py-[20px] pl-[20px]  rounded-[10px] border-[#797B86]"
                placeholder="Phone Number*"
                required
              />
            </div>

            <div>
              <textarea
                rows={4}
                placeholder="message"
                className="border w-full pl-[20px] rounded-[10px] border-[#797B86]"
              ></textarea>
            </div>
            <div className="">
              <input type="checkbox" required className="w-[16px] h-[16px]" />
              <label> I agree to receive communications from KaziPOS</label>
            </div>
            <div className="flex justify-end pt-[22px]">
              <button className="bg-[#7F0808] flex gap-[10px] items-center py-[10px] px-[30px] rounded-[30px] h-[44px] w-[133px] text-[#FFFFFF] font-inter text-[16px]">
                <span >Send</span>
                <svg
                 className="w-[240px] h-[250px]"                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 10.5002L11 13.5002M20.288 3.53122C20.3829 3.49847 20.4851 3.49309 20.5829 3.51567C20.6807 3.53825 20.7702 3.5879 20.8411 3.65893C20.912 3.72996 20.9615 3.81952 20.984 3.91736C21.0064 4.0152 21.0009 4.11738 20.968 4.21222L15.044 21.1422C15.0085 21.2434 14.9435 21.3316 14.8573 21.3954C14.7711 21.4592 14.6677 21.4956 14.5606 21.4999C14.4534 21.5042 14.3475 21.4763 14.2564 21.4196C14.1654 21.363 14.0935 21.2802 14.05 21.1822L10.831 13.9402C10.7768 13.8198 10.6804 13.7234 10.56 13.6692L3.31799 10.4492C3.22028 10.4056 3.1379 10.3337 3.08149 10.2428C3.02508 10.1518 2.99723 10.0461 3.00153 9.93917C3.00584 9.83225 3.04211 9.72909 3.10565 9.64299C3.16919 9.5569 3.25709 9.49184 3.35798 9.45622L20.288 3.53122Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default App;
