import Image from 'next/image';
import serviceTabImage from '../assets/images/service-cp.png';
import ButtonOutline from './ui/ButtonOutline';

const ServicesTabs = () => {
  return (
    <div className='space-y-5'>
      {/* different services tabs wrapper  */}
      <div className='flex justify-between gap-3 overflow-auto rounded-xl border'>
        <button className='bg-hit-pink-300 hover:bg-hit-pink-400 active:bg-hit-pink-500 whitespace-nowrap rounded-xl px-8 py-4 text-xl font-bold text-white transition'>
          Cavity Protection
        </button>
        <button className='bg-hit-pink-300 hover:bg-hit-pink-400 active:bg-hit-pink-500 whitespace-nowrap rounded-xl px-8 py-4 text-xl font-bold text-white transition'>
          Cosmetic Dentisty
        </button>
        <button className='bg-hit-pink-300 hover:bg-hit-pink-400 active:bg-hit-pink-500 whitespace-nowrap rounded-xl px-8 py-4 text-xl font-bold text-white transition'>
          Oral Surgery
        </button>
      </div>
      {/* details about different services tabs  */}
      <div className='space-y-5'>
        <div>
          <Image
            src={serviceTabImage}
            alt='service images'
            className='w-full rounded-xl'
          />
        </div>
        <h1 className='text-center text-3xl font-bold lg:text-left'>
          Electro Gastrology Therapy
        </h1>
        <p className='text-base font-normal'>
          Revolutionizing Digestive Health with Electro Gastrology Therapy:
          Experience Cutting-Edge Technology for Gastrointestinal Wellness.
          Non-Invasive Solutions for Enhanced Comfort and Quicker Recovery.
          Customized Treatment Plans Tailored to Individual Patient Needs.
          Expert Guidance from Specialized Medical Professionals. Continuous
          Monitoring Ensures Optimal Effectiveness for Lasting Results.
        </p>
        <p className='text-base font-normal'>
          Technology for Gastrointestinal Wellness. Non-Invasive Solutions for
          Enhanced Comfort and Quicker Recovery. Customized Treatment Plans
          Tailored to Individual Patient Needs. Expert Guidance from Specialized
          Medical
        </p>
        <ButtonOutline>More Details</ButtonOutline>
      </div>
    </div>
  );
};

export default ServicesTabs;
