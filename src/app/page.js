import ContactUs from '@/components/ContactUs';
import ExpertDoctors from '@/components/ExpertDoctors';
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
      <ExpertDoctors />
      <ContactUs />
    </main>
  );
};

export default Home;
