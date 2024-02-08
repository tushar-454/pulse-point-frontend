const page = () => {
  return (
    <div className='w-full'>
      {/* top of the page label and date  */}
      <div className='flex flex-col items-center justify-between gap-1 sm:flex-row'>
        <h1 className='text-xl font-bold'>All Users : 06</h1>
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
              Email
            </th>
            <th className='whitespace-nowrap border border-slate-400 p-2'>
              Action
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
              <td className='whitespace-nowrap border border-slate-400 p-2'>
                tofajjalhossainmohsin@gmail.com
              </td>
              <td className='whitespace-nowrap border border-slate-400 p-2'>
                <button className='rounded-md bg-deep-teal-800 px-3 py-2 text-white transition-all active:bg-deep-teal-900'>
                  Remove user
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
