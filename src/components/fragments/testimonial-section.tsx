import React, { useState } from 'react';
import { useTestimoni } from '@/context/testimoniContext';
import styles from '../../css/testimoni.module.css';
import Spinner from '../elements/spinner';

const TestimonialSection: React.FC = () => {
  const { loading, error, testimonies } = useTestimoni();
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | ''>('');
  const [isPlaying, setIsPlaying] = useState(false);

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
    }, 200);
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
        className={`max-w-7xl px-5 md:px-12 mx-auto ${styles.cardContainer} ${slideDirection === 'left' ? styles.slideLeft : slideDirection === 'right' ? styles.slideRight : ''}`}
      >
        <div className="h-full flex flex-col md:flex-row flex-wrap bg-pr800 rounded-3xl text-white">
          <div className="w-full md:w-3/5 flex flex-col justify-around p-6 md:p-12">
            <div>
              <img src="/images/icon/5-star.png" alt="5 star rating" />
            </div>
            <p className="text-2xl md:text-4xl mt-3 md:mt-6">{currentTestimonial?.testimoni}</p>
            <div className="flex mt-4 md:mt-6">
              <img
                className="w-12 h-auto mr-6"
                src={currentTestimonial?.InstansiPenerima?.instansiImg}
                alt="Institute"
              />
              <div>
                <h4 className="font-semibold text-base md:text-xl">- {currentTestimonial?.name}</h4>
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
          <div className="w-full relative md:w-2/5">
            {!isPlaying ? (
              <div
                className="relative w-full h-0 pb-[56.25%] md:pb-0 md:h-full rounded-none md:rounded-r-3xl overflow-hidden cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                {/* Thumbnail */}
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="https://img.youtube.com/vi/-_1J4Ii-yUU/hqdefault.jpg"
                  alt="YouTube Thumbnail"
                />

                {/* Overlay with play button */}
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 22v-20l18 10-18 10z" />
                  </svg>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-0 pb-[56.25%] md:pb-0 md:h-full rounded-none md:rounded-r-3xl overflow-hidden">
                {/* YouTube Embed */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/-_1J4Ii-yUU?autoplay=1&mute=0"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>


        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
