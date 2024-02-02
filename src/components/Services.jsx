import Image from 'next/image';
import servicesSideImg from '../assets/images/services-side-image.png';
import ServicesTabs from './ServicesTabs';
import Container from './shared/Container';

const Services = () => {
  return (
    <section>
      <Container>
        {/* services wrapper  */}
        <div className='flex flex-col justify-between gap-10 py-10 pb-20 md:gap-5 md:py-20 lg:flex-row'>
          {/* services side image  */}
          <div className='w-full lg:w-1/2' data-aos='fade-up'>
            <Image
              src={servicesSideImg}
              alt='services side doctor image'
              className='mx-auto'
            />
          </div>
          {/* services content with tab select  */}
          <div className='w-full space-y-5 lg:w-1/2'>
            {/* title & subtitle  */}
            <h1
              data-aos='fade-up'
              className='text-center text-4xl font-bold lg:text-left'
            >
              Our Services
            </h1>
            <p data-aos='fade-up' className='text-base font-normal'>
              Explore a Spectrum of Healthcare Solutions: Embrace the Future
              with Telemedicine Prowess. Effortless Appointment Management for
              Seamless Workflow. Precision Diagnostics for Informed Patient
              Care. Build Networks for Collaborative and Inclusive Healthcare.
              Prioritize Security and Stay Informed with Continuous Education.
            </p>
            <ServicesTabs />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
