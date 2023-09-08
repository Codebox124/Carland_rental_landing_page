"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'

import { Pagination } from 'swiper/modules'

import { FaQuoteLeft } from 'react-icons/fa'

import { motion } from 'framer-motion'

import { fadeIn } from '../../varients'
const testimonialData = [
  {
    message:
    'They truly exceeded my expectation and made my car rental experience a delight',
    avatar: '/images/testimonial/avatar.png',
    name: "Raji Roqeeb",
    job: 'Developer'
  },
  {
    message:
    'They truly exceeded my expectation and made my car rental experience a delight',
    avatar: '/images/testimonial/avatar.png',
    name: "Raji Roqeeb",
    job: 'Developer'
  },
  {
    message:
    'They truly exceeded my expectation and made my car rental experience a delight',
    avatar: '/images/testimonial/avatar.png',
    name: "Raji Roqeeb",
    job: 'Developer'
  }
]

export default function TestimonialSlider() {
  return (
    <div><Swiper pagination= {{
      clickable:true,
      dynamicBullets: true
    }}
    modules={[Pagination]}
    className='h-[450px] xl:h-[400px]'
    >
      {testimonialData.map((person, index)=>{
        const{message, avatar, name, job} = person
        return(
          <SwiperSlide key={index}>
            <div className='flex flex-col justify-center text-center items-center'>
              <FaQuoteLeft className = 'text-7xl text-accent mb-6' />
              <div className='text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium'>{message}</div>
              <Image src= {avatar} width={64} height={64} alt='' />
              <div className="text-lg font-medium">{name}</div>
              <div className="text-secondary">{job}</div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper></div>
  )
}
