import React, { useContext, useEffect, useState } from 'react'
import { useTestimoni } from '@/context/testimoniContext'

const TestimonialSection: React.FC = () => {
  const { loading, error, testimonies, getAllTestimoni } = useTestimoni();
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  console.log(testimonies);
  const handleLeftArrowClick = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === 0 ? testimonies.length - 1 : prevIndex - 1
    );
  };

  const handleRightArrowClick = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === testimonies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonies[currentTestimonialIndex];

  return (
    <section id='testimonial-section' className='mb-32'>
      <div className='max-w-screen-xl w-full h-full flex flex-wrap mx-auto bg-pr800 rounded-3xl text-white'>
        <div className='w-3/5 flex flex-col justify-around p-12'>
          <div>
            <img src="images/icon/5-star.png" alt="" />
          </div>
          <p className='text-4xl'>{currentTestimonial?.testimoni}</p>
          <div className='flex'>
            <img className='w-12 h-auto mr-6' src={currentTestimonial?.InstansiPenerima.instansiImg} alt="" />
            <div>
              <h4 className='font-semibold text-xl'>- {currentTestimonial?.name}</h4>
              <h6>{currentTestimonial?.InstansiPenerima.name}</h6>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <ul className='flex'>
              {testimonies.map((_, index) => (
                <li key={index} className={`w-3 h-3 ${index === currentTestimonialIndex ? 'bg-pr300' : 'bg-white'} mr-2 rounded-full`}></li>
              ))}
            </ul>
            <div className='flex'>
              <img className='mr-4 cursor-pointer' src="images/icon/arrow-left.png" alt="Left Arrow" onClick={handleLeftArrowClick} />
              <img className='cursor-pointer' src="images/icon/arrow-right.png" alt="Right Arrow" onClick={handleRightArrowClick} />
            </div>
          </div>
        </div>
        <div className='w-2/5'>
          <img className='w-full rounded-r-3xl' src="/images/testi-image.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
