import DoctorProfileTabs from '@/components/DoctorProfileTabs';
import Container from '@/components/shared/Container';
import { loginIsRequiredServer } from '@/libs/auth';
import Image from 'next/image';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const DoctorProfile = async () => {
  await loginIsRequiredServer();
  return (
    <main className='bg-slate-50 py-10'>
      <Container>
        {/* about doctor basic information */}
        <div className='flex flex-col gap-4 overflow-hidden rounded-xl bg-white p-5 lg:flex-row'>
          {/* doctor profile image  */}
          <div data-aos='fade-right'>
            <Image
              src={
                'https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg'
              }
              alt={'Doctor profile picture'}
              width={500}
              height={500}
              className='w-full rounded-lg object-cover'
            />
          </div>
          {/* doctor profile name */}
          <div className='space-y-2' data-aos='fade-up'>
            <h1 className='text-[40px] font-bold'>Dr. Ruby Perrin</h1>
            <p className='text-xl font-medium'>MBBS, MD - General Medicine</p>
            <p className='text-lg'>4.5 (35)</p>
            <div className='flex items-center gap-3 text-base font-normal'>
              <HiOutlineLocationMarker className='text-xl' />
              <p>Dhanmondi, Road 9/A -</p>
              <a
                href='https://maps.app.goo.gl/Jjoz7jwJZLrSEwEz7'
                target='_blank'
                className='text-hit-pink-300 transition hover:text-hit-pink-400'
              >
                Get Direction
              </a>
            </div>
            {/* specialist in  */}
            <div className='flex flex-wrap gap-2'>
              {[{}, {}, {}]?.map((specialist, index) => (
                <button
                  key={index}
                  className='rounded-lg bg-slate-100 px-2 py-1 text-base font-normal'
                >
                  Dental Filling
                </button>
              ))}
            </div>
          </div>
          <hr />
        </div>
        {/* doctor other information show on tab view */}
        <div className='mt-10 rounded-xl bg-white p-5'>
          <DoctorProfileTabs />
        </div>
      </Container>
    </main>
  );
};

export default DoctorProfile;
