import qouta from '@/assets/images/qouta.svg';
import Image from 'next/image';

const TestimonialCard = ({ testimonial }) => {
  const { patientImg, patientName, date, comment } = testimonial;
  return (
    <div
      className={`min-w-full space-y-4 rounded-lg border p-8 lg:min-w-[50%]`}
    >
      {/* Testimonial giver info  */}
      <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
          <Image
            src={patientImg}
            width={500}
            height={500}
            alt='user'
            className='h-16 w-16 rounded-full object-cover'
          />
          <div>
            <h1 className='text-xl font-bold'>{patientName}</h1>
            <p className='text-base font-normal'>{date}</p>
          </div>
        </div>
        <div>
          <Image src={qouta} alt='quota icon' />
        </div>
      </div>
      <p className='text-lg font-normal'>{comment}</p>
    </div>
  );
};

export default TestimonialCard;
