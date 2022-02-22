import React from 'react'
import Image from 'next/image'


// Importing Assets 
import Profile from "../../assets/profile.png"
const Header = () => {
  return (
    <div className='bg-primary text-white flex justify-between items-center px-8 py-2'>
        <div className='text-2xl font-semibold'>
            <h6>Edvora</h6>
        </div>
        <div className='flex items-center px-4 gap-x-8'>
            <div >
                <h6>Dhruv Singh</h6>
            </div>
            <div>
               <Image src={Profile} alt="A picture of User"/>
            </div>
        </div>
    </div>
  )
}

export default Header