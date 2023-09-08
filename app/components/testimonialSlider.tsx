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
    <div><Swiper>
      {testimonialData.map((person, index)=>{
        const{message, avatar, name, job} = person
        return(
          <SwiperSlide key={index}>
            <div>
              <FaQuoteLeft className = 'text-7xl text-accent mb-6' />
              <div>{message}</div>
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
