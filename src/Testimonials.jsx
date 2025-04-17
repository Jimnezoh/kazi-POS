
import React, { useState, useEffect } from 'react';
import TestimonialsCard from '../components/TestimonialsCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const testimonials = [
    {
      description: "KaziPOS has transformed how I run my shop in Nakuru. Before, I struggled with tracking sales and managing stock, but now everything is so easy. I can see what's selling and what needs restocking with just a few taps. It's saved me hours every week",
      image: "./assets/testimonialImageOne.png",
      title: "Felix",
      subtitle: "Founder Lex",
    },
    {
      description: "Running a busy restaurant in Mombasa is no joke, but KaziPOS makes it manageable. The system helps me keep track of orders, manage tables, and even handle deliveries seamlessly. My staff loves it, and so do my customers",
      image: "./assets/testimonialImageTwo.png",
      title: "Amina",
      subtitle: "Founder Lex",
    },
    {
      description: "KaziPOS has been perfect for our supermarkets, it's scalable, reliable, and gives us real-time insights into sales and inventory across all our branches. It's a game-changer",
      image: "./assets/testimonialImageThree.png",
      title: "Felix",
      subtitle: "CEO Quickmart",
    },
    {
      description: "KaziPOS has made managing my salon so much easier. I can schedule appointments, track services, and even keep an eye on my stylists' performance—all from one dashboard. It's like having an extra pair of hands",
      image: "./assets/testimonialImageFour.png",
      title: "Linda",
      subtitle: "Founder LVMH",
    }
  ];
  
  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  // Jump to a specific slide
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  
  // Auto-play functionality
  useEffect(() => {
    let interval;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  // Function to get visible cards with correct order for centered layout
  const getVisibleCards = () => {
    // For a 3-card display with current card in the middle
    const prev = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    const next = (currentIndex + 1) % testimonials.length;
    
    return [prev, currentIndex, next];
  };

  const visibleCardIndices = getVisibleCards();

  return (
    <main className=" pb-[100px]">
      <div className="font-inter font-semibold text-4xl md:text-5xl lg:text-[64px] leading-[120%] mt-[60px] mb-[76px] px-4 md:px-[120px] lg:px-[182.5px] text-center">
        <h1 className="text-[#D80000]">We let Our <span className="text-[#7F0808]">Clients Success </span> 
        Speak For Us</h1>
      </div>
      
      {/* Carousel Container */}
      <div className="relative px-4 md:px-[64px] max-w-7xl mx-auto">
        {/* Cards Container */}
        <div className="overflow-hidden">
          <div className="flex gap-[14px] justify-center items-center transition-all duration-500 ease-in-out">
            {visibleCardIndices.map((index, position) => (
              <div 
                key={index} 
                className={`transition-all duration-500 ease-in-out ${
                  position === 1 ? 'transform scale-105 z-10' : 'scale-95 opacity-80 z-0'
                }`}
              >
                <TestimonialsCard
                  description={testimonials[index].description}
                  image={testimonials[index].image}
                  title={testimonials[index].title}
                  subtitle={testimonials[index].subtitle}
                  bgColor={position === 1 ? "bg-[#7F0808]" : "bg-[#EEEEF0]"}
                  textColor={position === 1 ? "text-[#FFFFFF]" : "text-[#7F0808]"}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="text-[#7F0808]" size={24} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="text-[#7F0808]" size={24} />
        </button>
        
        {/* Indicators/Dots - positioned below cards with smaller size */}
        <div className="flex justify-center gap-2 mt-[76px]">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-[#7F0808] scale-110" : "bg-[#EEEEF0]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Testimonials;