'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const patientNavLink = [
  {
    name: 'My Appointments',
    href: '/dashboard/appointments',
  },
];

const doctorNavLink = [
  {
    name: 'My Appointments',
    href: '/dashboard/appointments',
  },
  {
    name: 'My Reviews',
    href: '/dashboard/reviews',
  },
];

const adminNavLink = [
  {
    name: 'Statistics',
    href: '/dashboard/statistics',
  },
  {
    name: 'All Users',
    href: '/dashboard/users',
  },
  {
    name: 'Add a Doctor',
    href: '/dashboard/add-doctor',
  },
  {
    name: 'Manage Doctors',
    href: '/dashboard/doctors',
  },
];

const DashboardSideNav = ({ setIsNavCollapsed }) => {
  const pathname = usePathname();
  return (
    <>
      <nav className='flex flex-col gap-1'>
        {patientNavLink.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={() => setIsNavCollapsed(false)}
            className={`${
              pathname.includes(link.href) && 'bg-slate-100'
            } p-3 font-semibold transition-all hover:bg-slate-100`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default DashboardSideNav;
