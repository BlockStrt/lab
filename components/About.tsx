import React from 'react'
import Image from 'next/image'
import {TiSocialInstagramCircular} from 'react-icons/ti'
import {GiBirdTwitter} from 'react-icons/gi'
import {FaSnapchat} from 'react-icons/fa'
import { motion } from 'framer-motion'
import {ImMail3} from 'react-icons/im'

const About = () => {
  const avatar = 'https://cdn.sanity.io/images/7ezulpzq/production/f0547fb4659d48fee1af3b8c1fdb58c3d6c1e47b-1636x2180.jpg'
  return (
    <section className='h-[88vh] w-full justify-center flex '>
        <div className='w-full '>
          <div className='w-full flex justify-center p-5'>
               <div className='w-full justify-center items-center '>
                <div className='w-full flex justify-center items-center'>
                <Image src={avatar} width={200} height={200} alt='#' className='rounded-full'/>
                </div>
                <h1 className='text-center p-1 font-bold text-4xl'>Carlos Boozer</h1>
                <h2 className='text-center p-1'>Photographer</h2>
                <div className='flex justify-center w-full mx-auto '>
                <a href='https://www.instagram.com/youngjasperr/?hl=en'>
                  <div className='p-2'>
                    <TiSocialInstagramCircular />
                    </div>
                 </a>
                <a href='https://twitter.com/tylerthecreator'>
                  <div className='p-2'>
                    <GiBirdTwitter/>
                    </div>
                 </a>
                <a href='https://www.snapchat.com/add/djkhaled305?locale=en-US'>
                  <div className='p-2'>
                    <FaSnapchat />
                    </div>
                 </a>
                
                </div>
                <p className='text-center p-10 break-normal text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu sagittis elit. Curabitur nisl sem, sodales vel rutrum ac, accumsan ultricies quam. Proin in erat egestas ex accumsan auctor id sed mauris. Curabitur imperdiet massa neque, et ultricies mi ornare sit amet. Quisque porttitor lorem tempus tristique iaculis. Morbi justo odio, hendrerit vel volutpat at, tempus ut neque. In condimentum justo in ex maximus, vel scelerisque erat consequat. Sed varius erat augue, in consectetur lectus aliquam vitae. Sed egestas erat ut enim convallis, eget condimentum ex commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                
               </div>
               <div>
                
                
                
               </div>
      </div>
        </div>
    </section>
  )
}

export default About