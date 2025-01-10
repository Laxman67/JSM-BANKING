import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter,IBM_Plex_Serif } from 'next/font/google'



const inter = Inter({subsets:['latin'],variable:'--font-inter'})
const ibmPlexSerif=IBM_Plex_Serif({
  subsets:['latin'],
  weight:['400','500'],
  variable:'--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking plaform for everyone",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <main>
    SIDEBAR 
    {children}
   </main>
  );
}