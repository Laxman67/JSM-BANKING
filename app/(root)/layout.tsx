'use client';
import SideBar from '@/components/SideBar';
import MobileNav from '../../components/MobileNav';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Inter, IBM_Plex_Serif } from 'next/font/google';
import Image from 'next/image';
import '../globals.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-serif',
});

// export const metadata: Metadata = {
//   title: 'Horizon',
//   description: 'Horizon is a modern banking plaform for everyone',
//   icons: {
//     icon: '/icons/logo.svg',
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: 'Laksh',
    lastName: 'JSM',
  };

  const pathname = usePathname();
  return (
    <main className="flex  h-screen w-full font-inter">
      <div className="sidebar">
        <SideBar user={loggedIn} />
      </div>

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
          {/* <MobileNav user={loggedIn} /> */}
          <section className="max-w-[264px]">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="text-green-800  font-bold">
                  <Image
                    src="/icons/hamburger.svg"
                    height={30}
                    width={30}
                    alt="menu"
                    className="cursor-pointer"
                  />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="border-none bg-white flex align-middle justify-start"
              >
                <nav className="flex flex-col gap-4">
                  {/* Main Logo */}
                  <Link
                    href={'/'}
                    className="mb-12 cursor-pointer flex justify-center align-middle gap-2"
                  >
                    <Image
                      src="/icons/logo.svg"
                      width={40}
                      height={40}
                      alt="Horizon Logo"
                      className="size-[24px] max-xl:size-14"
                    />
                    <h1 className="sidebar-logo">Horizon</h1>
                  </Link>
                  {/* Others Nav Links */}
                  {sidebarLinks.map((item) => {
                    const isActive =
                      pathname === item.route ||
                      pathname.startsWith(`${item.route}/`);
                    return (
                      <SheetClose asChild key={item.route}>
                        <Link
                          href={item.route}
                          key={item.label}
                          className={cn(' sidebar-link flex  flex-start ', {
                            'bg-bank-gradient': isActive,
                          })}
                        >
                          <div className="relative size-6">
                            <Image
                              src={item.imgURL}
                              alt={item.label}
                              fill
                              className={cn({
                                'brightness-[3] invert-0': isActive,
                              })}
                            />
                          </div>

                          <span
                            className={cn('sidebar-label', {
                              '!text-white': isActive,
                            })}
                          >
                            {item.label}
                          </span>
                        </Link>
                      </SheetClose>
                    );
                  })}
                  USER
                </nav>
              </SheetContent>
            </Sheet>
          </section>
        </div>
        {children}
      </div>
    </main>
  );
}
