import SideBar from '@/components/SideBar';
import MobileNav from '../../components/MobileNav';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Inter, IBM_Plex_Serif } from 'next/font/google';
import Image from 'next/image';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-serif',
});

export const metadata: Metadata = {
  title: 'Horizon',
  description: 'Horizon is a modern banking plaform for everyone',
  icons: {
    icon: '/icons/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: 'Laksh',
    lastName: 'JSM',
  };
  return (
    <main className="flex  h-screen w-full font-inter">
      <div className="sidebar">
        <SideBar user={loggedIn} />
      </div>

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />

          <div className="">
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
