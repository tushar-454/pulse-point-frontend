'use client';
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import TestimonialCard from './TestimonialCard';
const testimonials = [
  {
    id: 1,
    patientImg:
      'https://www.mountaingoatsoftware.com/uploads/training/brian-bg.jpg',
    patientName: 'John Doe',
    date: '2024-01-28',
    comment:
      "Patient John Doe has been diligently following the prescribed medication regimen post-surgery. He reports minimal discomfort and credits the medications for managing pain effectively. John expresses gratitude for the medical team's guidance and is pleased with the positive impact on his recovery. The prescribed medications have played a crucial role in alleviating post-operative symptoms, allowing John to focus on rehabilitation and regain strength. Regular check-ins with the healthcare provider ensure that any adjustments to the medication plan are promptly addressed. Overall, John is optimistic about the continued positive influence of the prescribed medications on his health.",
  },
  {
    id: 2,
    patientImg:
      'https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png',
    patientName: 'Jane Smith',
    date: '2024-01-29',
    comment:
      "Jane Smith shares her experience with prescribed medications following recent treatment. She reports noticeable improvements in symptoms, attributing the positive changes to the prescribed medications. Jane appreciates the personalized approach to her care and the effectiveness of the prescribed regimen. The medical team's thorough explanation of each medication has empowered Jane to manage her health confidently. Scheduled medication reviews and follow-up appointments contribute to Jane's ongoing well-being. She acknowledges the importance of medication adherence and values the collaborative effort with her healthcare provider. Overall, Jane's health journey is positively influenced by the prescribed medications and ongoing medical support.",
  },
  {
    id: 3,
    patientImg:
      'https://www.jsums.edu/wbc/files/2021/09/businesswoman-scaled.jpg',
    patientName: 'Bob Johnson',
    date: '2024-01-30',
    comment:
      "Bob Johnson provides insight into his experience with prescribed medications. Since starting the prescribed regimen, Bob has noticed a significant reduction in symptoms and improved overall well-being. He commends the healthcare team for their expertise in tailoring the medication plan to address his specific health needs. Bob emphasizes the importance of open communication with his healthcare provider, allowing for timely adjustments to the prescribed medications. Regular follow-up appointments ensure that Bob's health is continually monitored, providing reassurance and confidence in his treatment plan. Overall, Bob credits the prescribed medications as a key factor in his positive health trajectory and ongoing recovery.",
  },
  {
    id: 4,
    patientImg:
      'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D',
    patientName: 'Alice Williams',
    date: '2024-02-01',
    comment:
      "Alice Williams shares her positive experience with prescribed medications. Since starting the medication plan, Alice has noticed a significant improvement in her symptoms. The carefully selected medications have effectively managed her condition, allowing her to resume daily activities with increased comfort. Alice appreciates the personalized approach taken by her healthcare provider, ensuring the prescribed medications align with her health goals. Ongoing communication and regular check-ins contribute to Alice's confidence in her treatment plan. She expresses gratitude for the positive impact of the prescribed medications on her overall well-being and quality of life.",
  },
  {
    id: 5,
    patientImg:
      'https://img.buzzfeed.com/buzzfeed-static/complex/images/jyu7r1ssdhxtwcxikucy/method-man.jpg?output-format=jpg&output-quality=auto',
    patientName: 'Ethan Martinez',
    date: '2024-02-02',
    comment:
      'Ethan Martinez provides an update on his health journey with prescribed medications. Following the advice of his healthcare provider, Ethan has diligently taken the prescribed medications as part of his treatment plan. The positive effects are evident, with a reduction in symptoms and improved energy levels. Ethan acknowledges the importance of medication adherence and values the collaborative approach to his care. Regular follow-up appointments and adjustments to the medication plan based on his progress further emphasize the personalized nature of his treatment. Ethan remains optimistic about the continued positive impact of the prescribed medications on his health and overall recovery.',
  },
  {
    id: 6,
    patientImg:
      'https://img.freepik.com/free-photo/freedom-concept-with-hiker-mountain_23-2148107064.jpg',
    patientName: 'Olivia Brown',
    date: '2024-02-03',
    comment:
      "Olivia Brown shares her experience with prescribed medications and their role in managing her health condition. Since incorporating the prescribed medications into her daily routine, Olivia has experienced a notable improvement in symptom control. The medications have provided relief, allowing Olivia to engage in daily activities more comfortably. She emphasizes the importance of the healthcare provider's guidance in selecting medications tailored to her specific needs. Olivia values the ongoing support and regular check-ins, ensuring that her treatment plan aligns with her evolving health status. Overall, Olivia expresses gratitude for the positive impact of prescribed medications on her health and well-being.",
  },
];

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
    <div className='relative overflow-hidden py-10' data-aos='fade-up'>
      {/* controller  */}
      <div className='sliderContainer absolute left-[50%] top-[50%] z-50 flex w-full translate-x-[-50%] translate-y-[-50%] items-center justify-between'>
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
