import Hero from '@/components/Hero';
import Information from '@/components/Information';
import Services from '@/components/Services';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Information />
      <TestimonialsCarousel />
    </main>
  );
};

export default Home;
