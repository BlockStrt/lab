import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { p1, p2, p3, p4 } from '@/clientfirs/images';
// Import Swiper styles
import 'swiper/css';


const Photography = () => {
    const p1 = 'https://cdn.sanity.io/images/7ezulpzq/production/f0547fb4659d48fee1af3b8c1fdb58c3d6c1e47b-1636x2180.jpg'
    const p2 = 'https://cdn.sanity.io/images/7ezulpzq/production/2186c780dd1d75578c73d0de8b42bebb40dd2dff-3861x2574.jpg'
    const p3 = 'https://cdn.sanity.io/images/7ezulpzq/production/984efbe24eb5a24aa0e1191155cc170c3099e240-1200x800.webp'
    const p4 = 'https://cdn.sanity.io/images/7ezulpzq/production/2a446e8bb6b78b0c0678d90d00939fdad59e2d64-2000x2000.jpg'

    return (
        <section className=' w-screen pb-10'>
        <div className='p-10 justify-center items-center'>
            <div className='w-full'>
            <Swiper
                spaceBetween={50}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>
                <Image src={p1} width={600} height={600} alt='#'/>
            </SwiperSlide>
            <SwiperSlide>
            <Image src={p2} width={600} height={600} alt='#'/>
            </SwiperSlide>
            <SwiperSlide>
            <Image src={p3} width={600} height={600} alt='#'/>
             
            </SwiperSlide>
            <SwiperSlide>
            <Image src={p4} width={600} height={600} alt='#'/>
            
            </SwiperSlide>
            ...
            </Swiper>
            </div>
        </div>
    </section>
  )
}


export default Photography