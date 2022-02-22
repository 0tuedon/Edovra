import Image from 'next/image'
import React from 'react'

import LinkArray from '../Link/LinkArray'
import LinkItem from '../Link/LinkItem'

import FilterIcon from "../../assets/filter.svg"
import FilterModal from './FilterModal'
const Link = (props) => {
  return (
    <div className='flex px-8 py-4 justify-between items-center'>
      <ul className='flex  gap-x-9 text-white'>
        {LinkArray.map((link)=><LinkItem key={link.key} link={link} /> )}
    </ul>
    <div  className='text-white cursor-pointer'>
      <Image src={FilterIcon} alt="Filter icon" />
     <span className='ml-2'>Filter</span>
    </div>
    <FilterModal />
    </div>
    
  )
}

export default Link
