import { FaRegClock } from 'react-icons/fa';

const InformationCard = () => {
  return (
    <div className='bg-hit-pink-300 flex gap-3 rounded-lg p-10 text-white'>
      {/* icon  */}
      <div>
        <FaRegClock className='relative top-1 text-5xl' />
      </div>
      {/* information text content  */}
      <div className='space-y-2'>
        <h1 className='text-2xl font-bold'>Opening Hour</h1>
        <p className='text-xl font-normal'>Open 9.00 am to 5.00pm Everyday</p>
      </div>
    </div>
  );
};

export default InformationCard;
