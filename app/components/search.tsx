"use client"

import { useContext } from "react"
import { SearchContext } from "../context/search"
import LocationSelection from "./locationSelection"

export default function Search() {
  const { searchActive } = useContext(SearchContext)
  return (
    <div
     className={`${searchActive 
      ? 'bg-white rounded-none xl:h-[80px]' 
      : 'bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]'
      } hidden  w-full relative shadow-lg`}>

      <div className="xl:h-full flex items-center px-6 xl:px-8">
      <LocationSelection /> 
      </div>

    </div>
  )
}
