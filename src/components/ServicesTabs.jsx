'use client';
import Image from 'next/image';
import { useState } from 'react';
import serviceTabImage from '../assets/images/service-cp.png';
import ButtonOutline from './ui/ButtonOutline';

const services = [
  {
    id: 0,
    serviceCategory: 'Cavity Protection',
    serviceName: 'Electro  Gastrology Therapy',
    serviceDetails:
      'Experience Cutting-Edge Technology for Gastrointestinal Wellness.Non-Invasive Solutions for Enhanced Comfort and Quicker Recovery. Customized Treatment Plans Tailored to Individual Patient Needs. Expert Guidance from Specialized Medical Professionals. Continuous Monitoring Ensures Optimal Effectiveness for Lasting Results. Technology for Gastrointestinal Wellness. Non-Invasive Solutions for Enhanced Comfort and Quicker Recovery. Customized Treatment Plans Tailored to Individual Patient Needs. Expert Guidance from Specialized Medical Professionals. Continuous Monitoring Ensures Optimal',
    serviceImage: 'https://i.postimg.cc/TPhYgZG8/service-cp.png',
  },
  {
    id: 1,
    serviceCategory: 'Cosmetic Dentisty',
    serviceName: 'Radiant Smiles Transformation',
    serviceDetails:
      'Immerse yourself in the world of Radiant Smile Transformation, where artistry meets dentistry to redefine your smile. Our Cosmetic Dentistry services encompass a range of transformative procedures, from teeth whitening and veneers to smile makeovers and orthodontic enhancements.Experience personalized treatment plans tailored to enhance your unique facial features, ensuring a natural and harmonious result. Our team of skilled and experienced cosmetic dentists combines precision with aesthetic sensibility, creating stunning, yet functional, smiles. Embrace confidence and self-assurance as our cosmetic dentistry services go beyond aesthetics, promoting overall oral health and well-being. Uncover the latest advancements in cosmetic dentistry techniques, ensuring you receive top-notch, innovative care that aligns with modern standards.Discover a new level of dental excellence with Radiant Smiles Transformation, where your journey to a brighter, more confident smile begins.',
    serviceImage:
      'https://www.lovettdentistrysugarland.com/wp-content/uploads/2020/07/dental-health-services.jpeg',
  },
  {
    id: 2,
    serviceCategory: 'Oral Surgery',
    serviceName: 'Precision Oral Solutions',
    serviceDetails:
      'Embark on a journey of optimal oral health with our specialized oral surgery services. From wisdom tooth extractions to corrective jaw surgeries, our skilled oral surgeons employ precision techniques. Experience personalized care as our team develops tailored treatment plans, addressing individual needs with a focus on comfort and efficiency. Benefit from cutting-edge technology and advanced surgical methodologies, ensuring the highest standard of precision in every procedure. Rest assured with our commitment to patient well-being, offering compassionate support and clear communication throughout your oral surgery experience. Choose Precision Oral Solutions for a seamless blend of expertise, technology, and compassionate care in every aspect of your oral surgery journey.',
    serviceImage: 'https://img1.wsimg.com/isteam/stock/8569',
  },
];

const ServicesTabs = () => {
  const [selectedService, setSelectedService] = useState(0);
  return (
    <>
      <div className='space-y-5'>
        {/* different services tabs wrapper  */}
        <div className='flex justify-between gap-3 overflow-auto rounded-xl border'>
          {services.map((service, index) => (
            <button
              onClick={() => setSelectedService(index)}
              className={`whitespace-nowrap rounded-xl bg-hit-pink-300 px-8 py-4 text-xl font-bold text-white transition hover:bg-hit-pink-400 hover:!text-white active:bg-hit-pink-500 ${
                index !== selectedService ? '!text-black' : ''
              } ${index !== selectedService ? 'bg-white' : ''} ${
                index === selectedService
                  ? 'bg-hit-pink-500 hover:bg-hit-pink-500 active:bg-hit-pink-500'
                  : ''
              }`}
            >
              {service.serviceCategory}
            </button>
          ))}
        </div>
        {/* details about different services tabs  */}
        <div className='space-y-5'>
          <div>
            <Image
              src={services[selectedService]?.serviceImage || serviceTabImage}
              width={500}
              height={500}
              alt='service images'
              className='w-full rounded-xl'
            />
          </div>
          <h1 className='text-center text-3xl font-bold lg:text-left'>
            {services[selectedService]?.serviceName || 'Service Name'}
          </h1>
          <p className='text-base font-normal'>
            {services[selectedService]?.serviceDetails ||
              'Services Description'}
          </p>
          <ButtonOutline>More Details</ButtonOutline>
        </div>
      </div>
    </>
  );
};

export default ServicesTabs;
