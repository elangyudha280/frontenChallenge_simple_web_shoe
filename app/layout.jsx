import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google";

import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";

import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const dmsans = DM_Sans({ 
  subsets: ["latin"],
  weight:['400','500','600','700','800']
});

export const metadata = {
  title: {
    absolute:'Home Page',
    default:'-'
  },
  description: "simple E-commerce simple shoes",
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'elangyudha280' }],
  creator: 'elangyudha280',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmsans.className}>
          <main className="relative w-full h-[100vh] overflow-y-auto overflow-x-hidden flex flex-col">
            {/*//! NAVBAR */}
              <Navbar/>
            {/*//! CONTENT */}
            <section className="relative flex-1 w-full h-full px-4 mx-auto  overflow-x-hidden overflow-y-auto">
              <div className="relative max-w-6xl mx-auto pt-5 pb-[4.5em]">
                 {children}
              </div>
            </section>
            {/*//! FOOTER */}
            <Footer/>
          </main>
      </body>
    </html>
  );
}
