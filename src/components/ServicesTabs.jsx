'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import serviceTabImage from '../assets/images/service-cp.png';
import ButtonOutline from './ui/ButtonOutline';

const ServicesTabs = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      setLoading(true);
      async function fetchServices() {
        const res = await fetch('./Services.json');
        const data = await res.json();
        setServices(data);
      }
      fetchServices();
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, []);
  return (
    <>
      {loading ? (
        <p>Loading ... </p>
      ) : (
        <div className='space-y-5'>
          {/* different services tabs wrapper  */}
          <div className='flex justify-between gap-3 overflow-auto rounded-xl border'>
            {services.map((service, index) => (
              <button
                onClick={() => setSelectedService(index)}
                className={`bg-hit-pink-300 hover:bg-hit-pink-400 active:bg-hit-pink-500 whitespace-nowrap rounded-xl px-8 py-4 text-xl font-bold text-white transition hover:text-white ${
                  index !== selectedService ? 'text-black' : ''
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
      )}
    </>
  );
};

export default ServicesTabs;
