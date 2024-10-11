import { Nunito } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import ToasterProvider from "./providers/ToasterProvider";
import RegisterModal from "./components/modals/RegisterModal";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oasis",
  description:
    "Online marketplace for short-and-long-term homestays and experiences in various countries and regions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
