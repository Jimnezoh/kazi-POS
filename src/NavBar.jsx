import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative border py-[7px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[64px]">
      {/* Desktop Layout */}
      <div className="hidden lg:flex h-[76px] w-full justify-between">
        {/* Logo Section */}
        <div className="flex xl:w-[114px] gap-[14px] my-[27.5px] items-center">
          <Logoicon />
          <p className="leading-[110%] font-inter text-[20px] text-[#540A06]">Kazipos</p>
        </div>
        
        <div className="flex xl:w-[865px] gap-6 lg:gap-8 xl:gap-[74px]">
          {/* Navigation Links */}
          <div className="flex xl:w-[397px] gap-4 lg:gap-5 xl:gap-[24px] items-center">
            <Homeicon />
            <div className="p-[10px] leading-[120%] text-[16px] text-[#540A06] font-inter">
              <a href="">Features</a>
            </div>
            <div className="p-[10px] leading-[120%] text-[16px] text-[#540A06] font-inter">
              <a href="">Pricing</a>
            </div>
            <div className="p-[10px] leading-[120%] text-[16px] text-[#540A06] font-inter">
              <a href="">Contact us</a>
            </div>
          </div>
          
          {/* Buttons */}
          <div className="flex gap-4 lg:gap-5 xl:gap-[30px] items-center">
            <div className="border border-[#540A06] text-center items-center rounded-[50px] xl:w-[182px] p-[10px]">
              <button type="submit" className="p-[10px] leading-[120%] text-[16px] text-[#540A06] font-inter">Login</button>
            </div>
            <div className="border rounded-[50px] text-center items-center bg-[#540A06] p-[10px] xl:w-[182px]">
              <button type="submit" className="p-[10px] leading-[120%] text-[16px] text-[#FFFFFF] font-inter">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-wrap items-center justify-between">
        {/* Logo and Menu Toggle */}
        <div className="flex items-center gap-[14px] py-3">
          <Logoicon />
          <p className="leading-[110%] font-inter text-[20px] text-[#540A06]">Kazipos</p>
        </div>
        
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
          {isMenuOpen ? <X size={24} className="text-[#540A06]" /> : <Menu size={24} className="text-[#540A06]" />}
        </button>
        
        {/* Mobile Menu Items */}
        {isMenuOpen && (
          <div className="w-full mt-2">
            <div className="flex flex-col w-full gap-2 pb-3">
              <div className="p-[10px] leading-[120%] text-[16px] text-[#540A06] font-inter">
                <a href="">Features</a>
              </div>
              <div className="p-[10px] leading-[120%] text-[16px] text-[#540A06] font-inter">
                <a href=''>Pricing</a>
              </div>
              <div className="p-[10px] leading-[120%] text-[16px] text-[#540A06] font-inter">
                <a href="footer.jsx">Contact us</a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 pb-3">
              <div className="border border-[#540A06] text-center rounded-[50px] p-[10px] sm:flex-1">
                <button type="submit" className="p-[10px] leading-[120%] text-[16px] text-[#540A06] font-inter">Login</button>
              </div>
              <div className="border rounded-[50px] text-center bg-[#540A06] p-[10px] sm:flex-1">
                <button type="submit" className="p-[10px] leading-[120%] text-[16px] text-[#FFFFFF] font-inter">Get Started</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default NavBar;







// functions containing the svg 


const Logoicon=()=>{
  return (
    <svg
        width="25"
        height="26"
        viewBox="0 0 25 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_3374_2929)">
          <path
            d="M24.9656 13.9375H20.5002C16.5997 13.9375 13.4377 17.0995 13.4377 21V25.4654C19.5939 25.0089 24.5091 20.0937 24.9656 13.9375Z"
            fill="#540A06"
          />
          <path
            d="M11.5627 25.4654V21C11.5627 17.0995 8.40069 13.9375 4.50016 13.9375H0.03479C0.491249 20.0937 5.40647 25.0089 11.5627 25.4654Z"
            fill="#540A06"
          />
          <path
            d="M24.9656 12.0621C24.5091 5.90586 19.5939 0.990639 13.4377 0.53418V4.99955C13.4377 8.90007 16.5997 12.0621 20.5002 12.0621H24.9656Z"
            fill="#540A06"
          />
          <path
            d="M11.5627 0.53418C5.40647 0.990639 0.491249 5.90586 0.03479 12.0621H4.50016C8.40069 12.0621 11.5627 8.90007 11.5627 4.99955V0.53418Z"
            fill="#540A06"
          />
          <path
            d="M8.48938 13.0001C10.2222 12.1343 11.6344 10.7221 12.5001 8.98926C13.3659 10.7221 14.7781 12.1343 16.5109 13.0001C14.7781 13.8658 13.3659 15.278 12.5001 17.0108C11.6344 15.278 10.2222 13.8658 8.48938 13.0001Z"
            fill="#540A06"
          />
        </g>
        <defs>
          <clipPath id="clip0_3374_2929">
            <rect
              width="25"
              height="25"
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
  );
};

const Homeicon = () => {
  return (
    <svg
      width="64"
      height="44"
      viewBox="0 0 64 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="44" rx="22" fill="#540A06" />
      <path
        d="M25 22H23L32 13L41 22H39M25 22V29C25 29.5304 25.2107 30.0391 25.5858 30.4142C25.9609 30.7893 26.4696 31 27 31H37C37.5304 31 38.0391 30.7893 38.4142 30.4142C38.7893 30.0391 39 29.5304 39 29V22"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29 31V25C29 24.4696 29.2107 23.9609 29.5858 23.5858C29.9609 23.2107 30.4696 23 31 23H33C33.5304 23 34.0391 23.2107 34.4142 23.5858C34.7893 23.9609 35 24.4696 35 25V31"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};


