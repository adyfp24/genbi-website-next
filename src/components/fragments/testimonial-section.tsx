import React, { useState } from 'react';
import { useTestimoni } from '@/context/testimoniContext';
import styles from '../../css/testimoni.module.css'; 
import Spinner from '../elements/spinner';

const TestimonialSection: React.FC = () => {
  const { loading, error, testimonies } = useTestimoni();
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | ''>('');

  const handleLeftArrowClick = () => {
    setSlideDirection('left');
    setTimeout(() => {
      setCurrentTestimonialIndex((prevIndex) => 
        prevIndex === 0 ? testimonies.length - 1 : prevIndex - 1
      );
      setSlideDirection('');
    }, 300); 
  };

  const handleRightArrowClick = () => {
    setSlideDirection('right');
    setTimeout(() => {
      setCurrentTestimonialIndex((prevIndex) => 
        prevIndex === testimonies.length - 1 ? 0 : prevIndex + 1
      );
      setSlideDirection('');
    }, 300); 
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center" style={{ height: '500px' }}> 
        <Spinner />
      </div>
    );
  }
  if (error) return <p>Error loading testimonials.</p>;
  if (!testimonies || testimonies.length === 0) {
    return (
      <div className="flex justify-center items-center" style={{ height: '500px' }}> 
        No testimonial data available
      </div>
    );
  }

  const currentTestimonial = testimonies[currentTestimonialIndex];

  return (
    <section id="testimonial-section" className="mb-32">
      <div
        className={`max-w-7xl px-12 mx-auto ${styles.cardContainer} ${slideDirection === 'left' ? styles.slideLeft : slideDirection === 'right' ? styles.slideRight : ''}`}
      >
        <div className="h-full flex flex-wrap bg-pr800 rounded-3xl text-white">
          <div className="w-3/5 flex flex-col justify-around p-12">
            <div>
              <img src="/images/icon/5-star.png" alt="5 star rating" />
            </div>
            <p className="text-4xl">{currentTestimonial?.testimoni}</p>
            <div className="flex mt-4">
              <img
                className="w-12 h-auto mr-6"
                // src={currentTestimonial?.InstansiPenerima?.instansiImg || '/images/default-institute.png'}
                src='/images/unej-logo.png'
                alt="Institute"
              />
              <div>
                <h4 className="font-semibold text-xl">- {currentTestimonial?.name}</h4>
                <h6>{currentTestimonial?.InstansiPenerima?.name}</h6>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6">
              <ul className="flex">
                {testimonies && testimonies.map((_, index) => (
                  <li
                    key={index}
                    className={`w-3 h-3 ${index === currentTestimonialIndex ? 'bg-pr300' : 'bg-white'} mr-2 rounded-full`}
                  ></li>
                ))}
              </ul>
              <div className="flex">
                <img
                  className="mr-4 cursor-pointer"
                  src="/images/icon/arrow-left.png"
                  alt="Left Arrow"
                  onClick={handleLeftArrowClick}
                />
                <img
                  className="cursor-pointer"
                  src="/images/icon/arrow-right.png"
                  alt="Right Arrow"
                  onClick={handleRightArrowClick}
                />
              </div>
            </div>
          </div>
          <div className="w-2/5">
            <img className="w-full rounded-r-3xl" src="/images/testi-image.png" alt="Testimonial image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
