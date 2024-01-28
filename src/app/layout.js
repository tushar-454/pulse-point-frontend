import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { Lexend } from 'next/font/google';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const lexend = Lexend({ subsets: ['latin-ext'] });

export const metadata = {
  title: 'Pulse Point Doctor Portal',
  description: 'Pulse Point Doctor Portal',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </Head>
      <body className={lexend.className}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
