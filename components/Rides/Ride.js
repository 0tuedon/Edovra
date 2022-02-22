import React, { useState } from 'react'

import Image from 'next/image'
import map from "../../assets/map.png"

import RideInfo from './RideInfo'

const Ride = (props) => {
    
  return (
    <div className='flex bg-ride  rounded-lg  mt-4 items-center'>
        <div className='p-5'>
            <Image  
            src={map} 
            alt="Map"
            />
        </div>
        <div>
            <ul className='text-white'>
                <RideInfo data={props.data} />
            </ul>
        </div>
        <div>
        </div>
        <div className='mt-8 flex gap-x-4 text-white self-start align-end'>
          <div>
            <p className='bg-black px-2 py-1 rounded-xl'>{props.data.city}</p>
          </div>
          <div>
            <p className='bg-black px-2 py-1 rounded-xl'>{props.data.state}</p>
          </div>
        </div>
    </div>
  )
}

export default Ride;