import Carousels from './Carousels';
import Container from './shared/Container';
import SectionTitle from './shared/SectionTitle';

const TestimonialsCarousel = () => {
  return (
    <section>
      <Container>
        {/* TestimonialsCarousel wrapper  */}
        <div className='space-y-5 py-20'>
          <SectionTitle
            title={'What Our Patients Says'}
            subTitle={
              'Patient Testimonials: Hear the Voices of Satisfaction and Wellness. Discover firsthand experiences that reflect our commitment to exceptional care and positive outcomes.'
            }
          />
          {/* carousel container  */}
          <Carousels />
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsCarousel;
