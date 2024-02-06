'use client';
import DashboardSideNav from '@/components/DashboardSideNav';
import { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';

const layout = ({ children }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  return (
    <main className='relative flex min-h-screen'>
      <aside
        className={`absolute ${
          isNavCollapsed ? '-left-0' : '-left-72'
        } h-svh w-[285px] bg-white transition-all md:static md:left-0 md:h-auto`}
      >
        {/* dashboard nav collapse button  */}
        <div
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          className='absolute -right-8 top-0 flex h-8 w-8 items-center justify-center rounded-br-full rounded-tr-full bg-deep-teal-950 text-2xl text-white md:hidden'
        >
          <FaAngleLeft
            className={`${
              isNavCollapsed ? 'rotate-0' : 'rotate-180'
            } transition-all`}
          />
        </div>
        <DashboardSideNav setIsNavCollapsed={setIsNavCollapsed} />
      </aside>
      <div className={`flex-grow bg-slate-100 p-3 pl-10`}>{children}</div>
    </main>
  );
};

export default layout;
