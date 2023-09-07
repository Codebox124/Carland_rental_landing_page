 'use client'
 import React , {useState} from "react"
 import {Menu} from '@headlessui/react'

 import { FaMapMarkedAlt } from 'react-icons/fa'

 const locations = [
  'Main Street 123, United State',
  'Business Road , Lagos State',
  'Main Land , United State'
 ]

export default function LocationSelection() {
  const [Location, setLoacations] = useState('Select Location')
  return (
    <Menu as='div' className='fixed w-full h-full flex xl:flex-row'>
      <div className=" relative flex-1">
        <Menu.Button className='dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8'>
          
          </Menu.Button>
        <Menu.Items className='dropdown-menu shadow-lg absolute -top-56 xl:top[90px] left-1/2 xl:left-0 transform -translate-x-1/2 xl:-translate-x-0 text-sm text-center xl:text-left z-10 w-full bg-white max-w-[332px] py-6 rounded-[10px]'>
         {locations.map((Location, index)=>{
          return <div key={index} >{Location}</div>
         })

         }
        </Menu.Items>
      </div>  

    </Menu>
  )
}
