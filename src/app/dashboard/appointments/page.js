const page = () => {
  return (
    <div className='w-full'>
      {/* top of the page label and date  */}
      <div className='flex flex-col items-center justify-between gap-1 sm:flex-row'>
        <h1 className='text-xl font-bold'>My Appointments</h1>
        <div className='rounded-full bg-white p-2'>
          <input type='date' className='bg-white' />
        </div>
      </div>
      {/* table */}
      <table className='mt-10 w-full'>
        <thead>
          <tr className='bg-slate-300'>
            <th className='whitespace-nowrap border border-slate-400 p-2'>
              No
            </th>
            <th className='whitespace-nowrap border border-slate-400 p-2'>
              Name
            </th>
            <th className='whitespace-nowrap border border-slate-400 p-2'>
              Services
            </th>
            <th className='whitespace-nowrap border border-slate-400 p-2'>
              Time
            </th>
          </tr>
        </thead>
        <tbody>
          {[{}, {}, {}, {}].map((appointment, index) => (
            <tr key={index} className='transition-all hover:bg-slate-200'>
              <td className='whitespace-nowrap border border-slate-400 p-2'>
                {++index}
              </td>
              <td className='whitespace-nowrap border border-slate-400 p-2'>
                Md Tofajjal Hossain Mohshin
              </td>
              <td className='whitespace-wrap border border-slate-400 p-2'>
                Two side to dental care for prevent pain Two side to dental care
              </td>
              <td className='whitespace-nowrap border border-slate-400 p-2'>
                2/6/2024, 11:37:34 PM
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
