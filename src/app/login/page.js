import Container from '@/components/shared/Container';
import LoginwithGoogle from '@/components/shared/LoginwithGoogle';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Link from 'next/link';

const Login = () => {
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
            <form className='space-y-5'>
              <Input
                label={'Email'}
                type={'text'}
                id={'email'}
                name={'email'}
                placeholder={'example@text.com'}
              />
              <Input
                label={'Password'}
                type={'password'}
                id={'password'}
                name={'password'}
                isPassword={true}
                placeholder={'H*&%FIUHsdfh'}
              />
              <Button style={{ width: '100%' }}>Create an account</Button>
            </form>
            <LoginwithGoogle />
            <p className='my-8 text-center text-lg font-bold'>
              Please register at first. Go to{' '}
              <Link
                href={'/singup'}
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
