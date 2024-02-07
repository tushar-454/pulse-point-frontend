import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

const LoginwithGoogle = () => {
  return (
    <div
      onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000' })}
      className='my-6 flex cursor-pointer items-center justify-center gap-2 rounded-full bg-slate-50 p-3 transition hover:bg-slate-100 active:bg-slate-200'
    >
      <FcGoogle className='text-4xl' />
      <p className='text-xl font-semibold'>Login with Google</p>
    </div>
  );
};

export default LoginwithGoogle;
