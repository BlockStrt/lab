import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={'bg-gray-300 h-screen w-full items-center overflow-x-hidden overflow-y-hidden scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60'}
    >
      <Navbar/>
      <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
        hell
      </div>
    </main>
  )
}
