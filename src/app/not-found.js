import notFoundSvg from '@/assets/images/not-found.png';
import Image from 'next/image';

const NotFound = () => {
  return (
    <section className='min-h-screen space-y-10 pt-20'>
      <div className='flex flex-col items-center'>
        <h1 className='text-5xl font-bold'>Sorry</h1>
        <p className='text-center text-3xl font-medium text-gray-500'>
          This page is not found
        </p>
      </div>
      <div className='mx-auto w-full px-10 lg:w-1/2 xl:w-1/3'>
        <Image
          src={notFoundSvg}
          alt='not found svg picture'
          className='w-full'
        />
      </div>
    </section>
  );
};

export default NotFound;
