'use client'

import Image from "next/image"
import {
    MdOutlineMapsHomeWork,
    MdOutlineBuildCircle,
    MdOutlineDirectionsCar
} from 'react-icons/md'

import CountUp from "react-countup"

import { useInView } from 'react-intersection-observer'

import { motion } from 'framer-motion'
import { fadeIn } from '../../varients'


const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,

    })
    return (
        <section className="section flex items-center " id="about" ref={ref}>
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:justify-between">
                    <motion.div variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.6 }} className="flex-1 mb-8 xl:mb-8">
                        <Image
                            className="rounded-[20px]"
                            src={'/images/about/car01.png'}
                            width={600}
                            height={448}
                            alt="" />
                    </motion.div>
                    <div className="flex-1 flex items-center xl:justify-center">
                    <div className=" xl:max-w-[517px]">
                        <h2 className="h2">Car services simplified </h2>
                        <p className="mb-[42px] max-w-md">Rent, choose, and repair with ease. Our convenient locations, diverse car types. and reliable repairs points ensure a seamless car experience </p>

                        <div className="flex items-center gap-x-8 mb-12">


                            <div className="flex flex-col w-[100px]">
                                <MdOutlineDirectionsCar className='text-5xl text-accent' />
                                <div className="text-3xl font-black mb-2">
                                    {inView ? <CountUp start={0} end={50} duration={3} delay={1} /> : null}
                                    +
                                </div>
                                <div className="uppercase text-[13px] font-semibold text-secondary">
                                    car <br /> types
                                </div>
                            </div>

                            <div className="flex flex-col w-[100px]">
                                <MdOutlineMapsHomeWork className='text-5xl text-accent' />
                                <div className="text-3xl font-black mb-2">
                                    {inView ? <CountUp start={0} end={135} duration={3} delay={1} /> : null}
                                    +
                                </div>
                                <div className="uppercase text-[13px] font-semibold text-secondary">
                                   rentals<br /> outlets
                                </div>
                            </div>

                            <div className="flex flex-col w-[100px]">
                                <MdOutlineBuildCircle className='text-5xl text-accent' />
                                <div className="text-3xl font-black mb-2">
                                    {inView ? <CountUp start={0} end={35} duration={3} delay={1} /> : null}
                                
                                </div>
                                <div className="uppercase text-[13px] font-semibold text-secondary">
                                   repair<br /> points
                                </div>
                            </div>
                        </div>
                        <button className="hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184]">See all cars</button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About