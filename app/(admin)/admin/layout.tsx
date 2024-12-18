import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/SideBar";
import Header from '@/components/header/index';
import AuthProvider from '@/app/context/AuthProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arnold Homes',
  description: 'Home Page',
}


export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <main className="h-full w-full">
            {/* <Navbar /> */}
            <div className="min-h-screen w-full overflow-hidden flex flex-row justify-between">
              <Sidebar />
              <div className="w-[85%] flex flex-col">
                <Header />
                {children}
              </div>
            </div>
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
