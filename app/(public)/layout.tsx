import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AudioContextProvider } from "@/context/AudioContext";
import Header from "@/components/header/Header";
import PrelineScript from "@/components/PrelineScript";
import FooterComponent from "@/components/Footer/Footer";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Star E",
  description: "Hybrid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AudioContextProvider>
          <Header />
          {children}

          <FooterComponent />
        </AudioContextProvider>
        <PrelineScript />
      </body>
    </html>
  );
}
