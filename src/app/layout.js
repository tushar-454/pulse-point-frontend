import Header from '@/components/shared/Header';
import { Lexend } from 'next/font/google';
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
      <body className={lexend.className}>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
