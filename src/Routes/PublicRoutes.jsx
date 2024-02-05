'use client';
import useAuth from '@/Hook/useAuth';
import { redirect } from 'next/navigation';

const PublicRoutes = ({ children }) => {
  const { user } = useAuth();
  return user ? redirect('/') : children;
};

export default PublicRoutes;
