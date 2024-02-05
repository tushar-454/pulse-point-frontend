'use client';
import useAuth from '@/Hook/useAuth';
import { redirect } from 'next/navigation';

const PrivateRoutes = ({ children }) => {
  const { user } = useAuth();
  return user ? children : redirect('/login');
};

export default PrivateRoutes;
