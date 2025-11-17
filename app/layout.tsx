import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResposiveNav from "@/components/Home/Navbar/ResposiveNav";
import { SectionProvider } from '@/components/Section/SectionContext';
import Footer from "@/components/Home/Footer/Footer"
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Inter({
  weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets:["latin"],
})

export const metadata: Metadata = {
  title: "Biplab Jena Portfolio",
  description: "Portfolio Build With next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[#0d0d1f]`}>
        <SectionProvider>
          <ResposiveNav />
          {children}
        </SectionProvider>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
