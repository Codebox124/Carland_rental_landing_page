 'use client'
 import Search from "./search"
 import  Image  from "next/image"
 import { SearchContext } from "../context/search"
import { useContext } from "react"
import {motion, easeInOut} from 'framer-motion'

import { fadeIn } from "../../varients"
import { once } from "events"





export default function Hero() {
  const searchActive=  useContext(SearchContext)
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10 " id="home">
      <div className="container mx-auto h-full xl:pt-10">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1 variants={fadeIn('down', 0.2)} initial= 'hidden' whileInView={"show"} viewport={{once:false, amount:0.6}} className="h1">Explore the Finest <span className="text-accent">Global</span> Offers{""}</motion.h1>
            <motion.p variants={fadeIn('down', 0.6)} initial= 'hidden' whileInView={"show"} viewport={{once:false, amount:0.6}}  className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10">Find your ideal ride for any adventure with our diverse range of affordable and dependable car rantals.</motion.p>

            <motion.div variants={fadeIn('down', 0.8)} initial= 'hidden' whileInView={"show"} viewport={{once:false, amount:0.6}}  className="flex gap-x-3 justify-center xl:justify-start">
              <button className="btn-cta">
                <Image alt="" width={132} height={36} src= {'/icons/buttons/app-store.svg'} />
              </button>
              <button className="btn-cta">
                <Image alt="" width={132} height={36} src= {'/icons/buttons/google-play.svg'} />
              </button>
            </motion.div>
          </div>
          <motion.div variants={fadeIn('up', 0.6)} initial= 'hidden' whileInView={"show"} viewport={{once:false, amount: 0.6}}  className="relative w-full h-full max-w-[50vh] md:max-w-[78vh] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[100px] min-[1680px]:right-[120px]   ">
            <Image src={'/images/hero/car.svg'} fill  style={{objectFit : "contain"}} alt="" />
          </motion.div>
        </div>
      </div>
      {
        searchActive ? (
          <div className="  top-[80] z-10 w-full max-w-[1920px]">
           <Search />
        </div>
        ) : (
          <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <Search />
        </div>
        )
      }
     
       
    </section>
  )
}
