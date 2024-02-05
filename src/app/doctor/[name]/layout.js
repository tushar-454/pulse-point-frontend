'use client';
import useAuth from '@/Hook/useAuth';
import PrivateRoutes from '@/Routes/PrivateRoutes';

const layout = ({ children }) => {
  const { loading } = useAuth();
  if (loading)
    return (
      <p className='my-4 min-h-screen text-center text-2xl font-bold'>
        Loading...
      </p>
    );
  return <PrivateRoutes>{children}</PrivateRoutes>;
};

export default layout;
