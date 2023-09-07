'use client'
import { useContext, useEffect, useState } from 'react'

import Image from 'next/image'

import { Link } from 'react-scroll'

import SearchMobile from './searchMobile'

import { useMediaQuery } from 'react-responsive'

import { BiMenuAltRight, BiX } from 'react-icons/bi'
import { SearchContext } from '../context/search'
export default function Header() {
    const { setSearchActive } = useContext(SearchContext)

    const [header, setHeader] = useState(false)
    const [nav, setNav] = useState(false)

    const desktopMode = useMediaQuery({
        query: '(min-width: 1388px)'
    })

    useEffect(() => {
        const handleScroll = () => {
            if (window.screenY > 40) {
                setHeader(true)
            } else {
                setHeader(false)
            }
            if (window.screenY > 800) {
                setSearchActive(true);
            } else {
                setSearchActive(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    return (
        <header className={`${header ? 'bg-white shadow-md py-2' : 'bg-transparent shadow-none py-4 '} fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}>
            <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
                <div className='flex justify-between items-center px-4'>
                    <Link to='home' smooth={desktopMode} spy={true} className='cursor-pointer'>
                        <Image src={'./icons/Logo.svg'} width={194} height={64} alt='logo' />
                    </Link>

                    <div onClick={() => { setNav(!nav) }}
                        className='cursor-pointer xl:hidden'>
                        {nav ? (
                            <BiX className='text-4xl' />) : (
                            <BiMenuAltRight className='text-4xl' />
                        )}
                    </div>
                </div>
                <nav className={`${nav ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0 ' : 'max-h-0  xl:max-h-max'} flex flex-col bg-white w-full gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case `}>
                    <Link to='home' activeClass='active' className='cursor-pointer' smooth={desktopMode} spy={true}>Home</Link>
                    <Link to='cars' activeClass='active' className='cursor-pointer' smooth={desktopMode} spy={true}>Cars</Link>
                    <Link to='about' activeClass='active' className='cursor-pointer' smooth={desktopMode} spy={true}>About</Link>
                    <Link to='why' activeClass='active' className='cursor-pointer' smooth={desktopMode} spy={true}>Why Us</Link>
                    <Link to='testimonial' activeClass='active' className='cursor-pointer' smooth={desktopMode} spy={true}>Testimonial</Link>
                    <Link to='contact' activeClass='active' className='cursor-pointer' smooth={desktopMode} spy={true}>Contact</Link>
                    <Link to='/' activeClass='active' className='cursor-pointer xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto ' smooth={desktopMode} spy={true}>See all cars</Link>

                    <SearchMobile />

                </nav>

            </div>

        </header>
    )
}
