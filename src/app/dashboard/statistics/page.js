import { FaUserDoctor, FaUserGroup } from 'react-icons/fa6';

const Statistics = () => {
  return (
    <div>
      {/* doctor, patient and appointment statistics with card  */}
      <div className='my-5 flex flex-col gap-5 md:flex-row'>
        {/* doctors card  */}
        <div className='w-full rounded-lg bg-white p-6 md:w-[400px]'>
          <div className='flex items-center gap-4'>
            <FaUserDoctor className='h-16 w-16 rounded-md bg-orange-100 p-4 text-orange-600' />
            <span className='text-4xl font-bold'>168</span>
          </div>
          <p className='mt-5 border-t-4 border-orange-500 pt-2 text-4xl font-bold'>
            Doctors
          </p>
        </div>
        {/* patient card  */}
        <div className='w-full rounded-lg bg-white p-6 md:w-[400px]'>
          <div className='flex items-center gap-4'>
            <FaUserGroup className='h-16 w-16 rounded-md bg-green-100 p-4 text-green-600' />
            <span className='text-4xl font-bold'>168</span>
          </div>
          <p className='mt-5 border-t-4 border-green-500 pt-2 text-4xl font-bold'>
            Patients
          </p>
        </div>
        {/* doctors card  */}
        <div className='w-full rounded-lg bg-white p-6 md:w-[400px]'>
          <div className='flex items-center gap-4'>
            <FaUserDoctor className='h-16 w-16 rounded-md bg-yellow-100 p-4 text-yellow-600' />
            <span className='text-4xl font-bold'>200</span>
          </div>
          <p className='mt-5 border-t-4 border-yellow-500 pt-2 text-4xl font-bold'>
            Appointments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
