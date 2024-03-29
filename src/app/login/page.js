'use client';
import Container from '@/components/shared/Container';
import LoginwithGoogle from '@/components/shared/LoginwithGoogle';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { loginResolver } from '@/libs/resolver';
import { getSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { authOptions } from '../api/auth/[...nextauth]/route';

const Login = () => {
  const [session, setSession] = useState(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'all', resolver: loginResolver });
  // handle form submit for login an account
  const loginUserForm = (data) => {
    console.log(data);
    reset();
  };
  useEffect(() => {
    async function session() {
      const session = await getSession(authOptions);
      setSession(session);
    }
    session();
  }, []);
  if (session) {
    router.push('/');
  }
  return (
    <main className='bg-slate-50'>
      <Container>
        {/* login wrapper  */}
        <div className='flex min-h-screen justify-center py-20'>
          <div className='h-fit w-full rounded-xl border bg-white p-8 sm:w-[640px]'>
            <h1 className='my-10 text-center text-3xl font-bold'>
              Login to Pulse Point
            </h1>
            {/* form start  */}
            <form className='space-y-5' onSubmit={handleSubmit(loginUserForm)}>
              <Input
                label={'Email'}
                type={'text'}
                id={'email'}
                name={'email'}
                placeholder={'example@text.com'}
                register={{ ...register('email', { required: true }) }}
                error={errors.email && errors.email.message}
              />
              <Input
                label={'Password'}
                type={'password'}
                id={'password'}
                name={'password'}
                isPassword={true}
                placeholder={'H*&%FIUHsdfh'}
                register={{ ...register('password', { required: true }) }}
                error={errors.password && errors.password.message}
              />
              <Button style={{ width: '100%' }} type={'submit'}>
                Login account
              </Button>
            </form>
            <LoginwithGoogle />
            <p className='my-8 text-center text-lg font-bold'>
              Please register at first. Go to{' '}
              <Link
                href={'/signup'}
                className='text-hit-pink-300 hover:underline'
              >
                SIGN UP
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Login;
