import Image from 'next/image';

const page = () => {
  return (
    <div className='w-full'>
      {/* top of the page label  */}
      <div className='flex flex-col items-center justify-between gap-1 sm:flex-row'>
        <h1 className='text-xl font-bold'>Manage Doctors</h1>
      </div>
      {/* table */}
      <table className='mt-10 w-full'>
        <thead>
          <tr className='bg-slate-300'>
            <th className='whitespace-nowrap border border-slate-400 p-2'>
              No
            </th>
            <th className='whitespace-nowrap border border-slate-400 p-2'>
              Doctors
            </th>
            <th className='whitespace-nowrap border border-slate-400 p-2'>
              Specialty
            </th>
            <th className='whitespace-nowrap border border-slate-400 p-2'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {[{}, {}, {}, {}].map((doctor, index) => (
            <tr key={index} className='transition-all hover:bg-slate-200'>
              <td className='whitespace-nowrap border border-slate-400 p-2'>
                {++index}
              </td>
              <td className='whitespace-nowrap border border-slate-400 p-2'>
                <Image
                  src={
                    'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png'
                  }
                  width={40}
                  height={40}
                  alt='doctor img'
                  className='inline-block h-16 w-16 rounded-full object-cover'
                />
                <p className='flex flex-col'>
                  <span className='text-lg font-semibold'>
                    Md Tofajjal Hossain Mohshin
                  </span>{' '}
                  <span className='font-semibold'>
                    tofajjalhossainmohsin@gmail.com
                  </span>
                </p>
              </td>
              <td className='whitespace-nowrap border border-slate-400 p-2'>
                Child Specialist
              </td>
              <td className='whitespace-nowrap border border-slate-400 p-2'>
                <button className='rounded-md bg-red-500 px-3 py-2 text-white transition-all active:bg-red-600'>
                  Remove doctor
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
