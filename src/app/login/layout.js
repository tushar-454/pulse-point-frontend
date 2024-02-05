'use client';
import useAuth from '@/Hook/useAuth';
import PublicRoutes from '@/Routes/PublicRoutes';

const layout = ({ children }) => {
  const { loading } = useAuth();
  if (loading)
    return (
      <p className='my-4 min-h-screen text-center text-2xl font-bold'>
        Loading...
      </p>
    );
  return <PublicRoutes>{children}</PublicRoutes>;
};

export default layout;
