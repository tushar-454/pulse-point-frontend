import qouta from '@/assets/images/qouta.svg';
import user from '@/assets/images/user.png';
import Image from 'next/image';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className={`min-w-full space-y-4 rounded-lg border p-8 lg:min-w-[50%]`}
    >
      {/* Testimonial giver info  */}
      <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
          <Image src={user} alt='user' />
          <div>
            <h1 className='text-xl font-bold'>Awlad Hossain</h1>
            <p className='text-base font-normal'>Product Designer</p>
          </div>
        </div>
        <div>
          <Image src={qouta} alt='quota icon' />
        </div>
      </div>
      <p className='text-lg font-normal'>
        Explore firsthand accounts of transformative experiences from our valued
        patients. From regained confidence to renewed well-being, our
        testimonials capture the impact of our dedicated care and personalized
        approach. Join the voices of satisfaction and let their stories inspire
        your journey toward health and happiness. At [Your Medical Help Center],
        we take pride in the stories that reflect our commitment to excellence
        and the positive impact we make in the lives of those we serve.
      </p>
    </div>
  );
};

export default TestimonialCard;
