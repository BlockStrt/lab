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
      className={'w-full h-screen mx-auto overflow-x-hidden'}
    >
      <Navbar/>
      <div id='home' className='w-full mx-auto flex justify-center h-screen my-auto mdl:py-0 xl:flex items-center gap-20 '>
        {/* me section */}
        <MeText/>
       
      </div>
      <div className='flex justify-between items-center gap-2 px-10'>
          <div className='w-[10%] border h-0 border-white justify-center'></div>
          <div className=''></div>
          <div className='w-[10%] border h-0 border-white items-center'></div>
      </div>


      <div id='archive' className='flex h-screen justify-centers items-center mx-auto'>
        {/* me section */}
        <Photography/>
       
      </div>
      <div className='flex justify-between items-center gap-2 px-10 '>
          <div className='w-[10%] border h-0 border-white justify-center'></div>
          <div className=''></div>
          <div className='w-[10%] border h-0 border-white items-center'></div>
      </div>
      <div className='flex justify-between items-center gap-2 px-10'>
          <div className='w-[10%] border h-0 border-white justify-center rotate-90'></div>
          <div className=''></div>
          <div className='w-[10%] border h-0 border-white items-center rotate-90'></div>
      </div>
      <div id='about' className='h-screen overflow-hidden mx-auto'>
        {/* about section */}
        <About/>
        
      </div>
     
      
    </main>
  )
}
