import qouta from '@/assets/images/qouta.svg';
import Image from 'next/image';

const DoctorReviews = () => {
  return (
    <div className='mt-10'>
      {/* doctor profile reviews section */}
      <div>
        <h1 className='text-xl font-bold'>Reviews</h1>

        <div className='my-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {[{}, {}, {}, {}, {}, {}, {}, {}].map((item, index) => (
            <div key={index} className='rounded-lg border p-4 shadow-lg'>
              <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                  <Image
                    src='https://cdn.icon-icons.com/icons2/2560/PNG/512/woman_user_avatar_account_female_icon_153149.png'
                    alt='user'
                    width={40}
                    height={40}
                    className='h-10 w-10 rounded-full'
                  />
                  <div>
                    <h1 className='text-lg font-bold'>John Doe</h1>
                    <p className='text-base font-normal'>26/01/2024</p>
                  </div>
                </div>
                <div>
                  <Image src={qouta} alt='quota icon' />
                </div>
              </div>
              <p className='mt-4'>
                Doctor provides excellent services and is highly recommended by
                patients. Doctor provides excellent services and is highly
                recommended by patients.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorReviews;
