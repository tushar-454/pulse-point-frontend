import Image from 'next/image';

const DoctorCard = ({ doctor, idx }) => {
  return (
    <div
      data-aos={idx % 2 === 0 ? 'fade-up' : 'fade-down'}
      className='rounded-md bg-slate-50 from-deep-teal-100/50 to-hit-pink-100/50 p-4 shadow-md transition-all hover:bg-gradient-to-r'
    >
      <div className='flex items-center justify-between'>
        <div>
          <div className='flex items-center gap-2'>
            <Image
              src={
                'https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg'
              }
              alt={'Doctor profile picture'}
              width={50}
              height={50}
              className='h-12 w-12 rounded-full object-cover'
            />
            <div>
              <h4 className='text-lg font-semibold'>Dr. John Doe</h4>
              <p className='text-sm text-gray-500'>Cardiologist</p>
            </div>
          </div>
        </div>
        <div className='text-end'>
          <p className='text-sm text-gray-500'>Rating</p>
          <p className='text-sm text-gray-500'>5.0</p>
        </div>
      </div>
      <div className='mt-4 flex items-center justify-between'>
        <div>
          <p className='text-sm text-gray-500'>USA, New York</p>
          <p className='text-sm text-gray-500'>+99044589584</p>
        </div>
        <div className='text-end'>
          <p className='text-sm text-gray-500'>Available</p>
          <p className='text-sm text-gray-500'>Sun, Mon, Fri</p>
        </div>
      </div>
      <div className='mt-4 flex items-center justify-between'>
        <div>
          <p className='text-sm text-gray-500'>Visiting Fee</p>
          <p className='text-sm text-gray-500'>100$</p>
        </div>
        <div className='text-end'>
          <p className='text-sm text-gray-500'>Visiting Hours</p>
          <p className='text-sm text-gray-500'>10:00 AM - 1:00 PM</p>
        </div>
      </div>
      <button className='mt-4 w-full rounded-full bg-white p-2 transition hover:bg-deep-teal-100 active:bg-deep-teal-200'>
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorCard;
