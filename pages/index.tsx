import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Me from '@/components/MeText'
import About from '@/components/About'
import MeText from '@/components/MeText'
import Photography from '@/components/Photography'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  return (
    <main
      className={' overflow-x-hidden'}
    >
      <Navbar/>
      <div id='home' className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
        {/* me section */}
        <MeText/>
       
      </div>
      <div id='photography' className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
        {/* me section */}
        <Photography/>
       
      </div>
      <div id='about' className='w-full  xl:flex items-center gap-20 justify-between'>
        {/* about section */}
        <About/>
        
      </div>
     
      
    </main>
  )
}
