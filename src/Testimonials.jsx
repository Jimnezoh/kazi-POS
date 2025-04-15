import React from 'react'
import TestimonialsCard from '../components/TestimonialsCard'

function Testimonials() {
  return (
    <main className='min-h-screen'>
      <div className='font-inter font-semibold text-[64px] leading-[120%] mt-[60px] mb-[76px] px-[182.5px] text-center'>
        <h1 className='text-[#D80000]'>We let Our <span className='text-[#7F0808]'>Clients Success </span> 
        Speak For Us</h1>
      </div>
      <div className='flex gap-[14px] px-[64px] text-[16px] font-inter leading-[32px] '>
        {/* cards  */}
        <TestimonialsCard 
        description="KaziPOS has transformed how I run my shop in Nakuru. Before, I struggled with tracking sales and managing stock, but now everything is so easy. I can see what’s selling and what needs restocking with just a few taps. It’s saved me hours every week"
        image="./assets/testimonialImageOne.png"
        title="Felix"
        subtitle="Founder Lex"
        bgColor="bg-[#7F0808]"
        textColor="text-[#FFFFFF]"
        />
        <TestimonialsCard 
        description='Running a busy restaurant in Mombasa is no joke, but KaziPOS makes it manageable. The system helps me keep track of orders, manage tables, and even handle deliveries seamlessly. My staff loves it, and so do my customers'
        image="./assets/testimonialImageTwo.png"
        title="Amina"
        subtitle="Founder Lex"
        bgColor="bg-[#EEEEF0]"
        textColor="text-[#7F0808]"
        />
        <TestimonialsCard 
        description='KaziPOS has been perfect for our supermarkets, it’s scalable, reliable, and gives us real-time insights into sales and inventory across all our branches. It’s a game-changer'
        image="./assets/testimonialImageThree.png"
        title="Felix"
        subtitle="CEO Quickmart"
        bgColor="bg-[#EEEEF0]"
        textColor="text-[#7F0808]"
        />
        <TestimonialsCard 
        description='KaziPOS has made managing my salon so much easier. I can schedule appointments, track services, and even keep an eye on my stylists’ performance—all from one dashboard. It’s like having an extra pair of hands'
        image="./assets/testimonialImageFour.png"
        title="Linda"
        subtitle='Founder LVMH'
        bgColor="bg-[#EEEEF0]"
        textColor="text-[#7F0808]"
        />
      </div>
    </main>
  )
}

export default Testimonials
