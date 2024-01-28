'use client';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import TestimonialCard from './TestimonialCard';
const testimonials = [{}, {}, {}, {}, {}, {}, {}, {}];
const Carousels = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [percentage, setPercentage] = useState(50);
  const [slideCount, setSlideCount] = useState(2);
  // next slide handler
  const nextSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === testimonials.length - slideCount ? 0 : currentSlide + 1,
    );
  };
  // prev slide handler
  const prevSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? testimonials.length - slideCount : currentSlide - 1,
    );
  };
  useEffect(() => {
    // const sliderContainer = document.querySelectorAll('.sliderContainer');
    // let intervalId = setInterval(() => {
    //   nextSlide();
    // }, 3000);
    // sliderContainer.forEach((container) => {
    //   // onmouse enter slider loop stop handler
    //   container.addEventListener('mouseenter', () => {
    //     clearInterval(intervalId);
    //   });
    //   // onmouse leave slider loop start handler
    //   container.addEventListener('mouseleave', () => {
    //     intervalId = setInterval(() => {
    //       nextSlide();
    //     }, 3000);
    //   });
    // });
    // set percentage
    if (window.innerWidth <= 992) {
      setPercentage(100);
      setSlideCount(1);
    }
    // return () => {
    //   clearInterval(intervalId);
    // };
  }, [currentSlide]);
  return (
    <div className='relative overflow-hidden py-10'>
      {/* controller  */}
      <div className='sliderContainer absolute top-48 z-50 flex w-full items-center justify-between'>
        <button onClick={prevSlide}>
          <FaChevronLeft className='h-14 w-14 rounded-full border-2 border-hit-pink-300 bg-white p-3 text-3xl text-hit-pink-400 transition hover:bg-hit-pink-300 hover:text-white active:bg-hit-pink-400 active:text-white' />
        </button>
        <button onClick={nextSlide}>
          <FaChevronRight className='h-14 w-14 rounded-full border-2 border-hit-pink-300 bg-white p-3 text-3xl text-hit-pink-400 transition hover:bg-hit-pink-300 hover:text-white active:bg-hit-pink-400 active:text-white' />
        </button>
      </div>
      {/* carousel  */}
      <div
        className='sliderContainer flex gap-0 duration-300 ease-linear'
        style={{ transform: `translateX(-${currentSlide * percentage}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Carousels;
