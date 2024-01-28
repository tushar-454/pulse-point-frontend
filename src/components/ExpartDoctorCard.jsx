import Image from 'next/image';
import {
  HiOutlineCalendar,
  HiOutlineCurrencyDollar,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import { IoStarSharp } from 'react-icons/io5';
import ButtonOutlineHover from './ui/ButtonOutlineHover';

const ExpartDoctorCard = ({ doctor }) => {
  const {
    id,
    image,
    name,
    designation,
    review,
    location,
    available,
    visitFee,
  } = doctor;
  return (
    <div className='rounded-xl border p-4'>
      {/* doctor image  */}
      <div>
        <Image
          src={image}
          width={500}
          height={500}
          alt='doctor picture'
          className='w-full'
        />
      </div>
      {/* doctor details  */}
      <div className='border-b py-4'>
        <h1 className='text-xl font-bold'>{name}</h1>
        <p className='text-base font-normal'>{designation}</p>
        <p className='flex items-center gap-2 text-lg font-bold'>
          {review} <IoStarSharp className='text-yellow-300' />
        </p>
      </div>
      {/* doctor location and available time  */}
      <div className='space-y-2 py-4 text-gray-600'>
        <div className='flex items-center gap-3 text-base font-normal'>
          <HiOutlineLocationMarker className='text-xl' />
          <p>{location}</p>
        </div>
        <div className='flex items-center gap-3 text-base font-normal'>
          <HiOutlineCalendar className='text-xl' />
          <p>{available}</p>
        </div>
        <div className='flex items-center gap-3 text-base font-normal'>
          <HiOutlineCurrencyDollar className='text-xl' />
          <p>{visitFee}</p>
        </div>
      </div>
      {/* doctor full profile view button  */}
      <div>
        <ButtonOutlineHover>View Profile</ButtonOutlineHover>
      </div>
    </div>
  );
};

export default ExpartDoctorCard;
