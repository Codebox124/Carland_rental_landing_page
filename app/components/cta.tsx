import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { fadeIn } from '../../varients'
export default function Cta() {
  return (
    <section className='flex items-end pt-24 xl:pt-48 bg-[#b2b7c2]/10' id='contact'>
      <div className="container mx-auto">
     <div className='flex flex-col md:flex-row xl:items-center'>
      <div className='flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0'>
        <div className='max-w-[520px] mx-auto order-2 xl:order-none'>
          
        <h2>Dowload our App and hit the road with ease</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quas quisquam, tempore consequatur sed voluptatem animi in rerum repellendus! Ab harum voluptatem atque minima omnis?</p>
       <div className='flex gap-x-3 justify-center md:justify-start '>
       <button className='btn-cta'><Image src={'/icons/buttons/google-play.svg'} width={132} height={36} alt='' /></button>

       <button className='btn-cta'><Image src={'/icons/buttons/google-play.svg'} width={132} height={36} alt='' /></button>
       </div>
        </div>
      </div>

     </div>
     <div className='flex-1 flex justify-center order-1 md:order-none'>
      <Image src={'/images/cta/phone.svg'} width={320} height={640} alt='' />
     </div>

    </div></section>
  )
}
