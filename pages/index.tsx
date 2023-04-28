import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Me from '@/components/MeText'
import About from '@/components/About'
import MeText from '@/components/MeText'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main
      className={''}
    >
      <Navbar/>
      <div id='home' className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
        {/* me section */}
        <MeText/>
      </div>
      <div className='w-full  xl:flex items-center gap-20 justify-between'>
        {/* about section */}
        <About/>
      </div>
    </main>
  )
}
