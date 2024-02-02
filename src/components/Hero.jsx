import heroImage from '@/assets/images/hero-image.png';
import Image from 'next/image';
import Container from './shared/Container';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section className='bg-hero w-full bg-cover bg-no-repeat'>
      <Container>
        <div>
          {/* hero wrapper  */}
          <div className='flex flex-col-reverse items-center justify-between gap-10 py-10 pb-20 md:gap-5 md:py-20 lg:flex-row'>
            {/* hero text content  */}
            <div className='w-full space-y-8 lg:w-1/2'>
              <h1
                data-aos='fade-up'
                className='text-5xl font-semibold text-white sm:text-7xl'
              >
                Your Best Medical Help Center
              </h1>
              <p
                data-aos='fade-up'
                className='text-lg font-semibold text-white'
              >
                "Revolutionizing Healthcare: Your Trusted Hub for Seamless
                Doctor-Patient Collaboration. Elevate Patient Care with Our
                Cutting-Edge Medical Portal."
              </p>
              <p data-aos='fade-up'>
                <Button>All Services</Button>
              </p>
            </div>
            {/* hero image  */}
            <div className='w-full lg:w-1/2' data-aos='fade-down'>
              <Image
                src={heroImage}
                alt='hero side images'
                className='mx-auto'
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
