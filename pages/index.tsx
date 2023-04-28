import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex bg-gray-300 min-h-screen flex-col items-center justify-between ${inter.className}`}
    >

        <div className='w-full fixed'><Navbar/></div>
     
    </main>
  )
}
