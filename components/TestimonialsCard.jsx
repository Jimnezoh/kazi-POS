import React from 'react'

function TestimonialsCard({
    description,
    image,
    title,
    subtitle,
    bgColor,
    textColor,
}) {
  return (
    <main className={`${bgColor} ${textColor} rounded-[25px] py-[51px] px-[12px] w-[359px]`}>
      <div className='mb-[35px]'>
        <p>{description}</p>
      </div>
      <div className='flex px-[20.5px] gap-[15px] w-[335px]'>
        <div className='w-[55px] h-[55px] '>
            <img src={image} alt={title} className='rounded-[1px] rotation-[180]' />
        </div>
        <div>
            <div className='text-[18px] font-inter font-medium leading-[32px]'>{title}</div>
            <div className='text-[16px] leading-[32px] font-inter '>{subtitle}</div>
        </div>
      </div>
    </main>
  )
}

export default TestimonialsCard
