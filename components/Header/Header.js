import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <div className='bg-black text-white flex'>
        <div>
            <h6>Edovra</h6>
        </div>
        <div className='flex'>
            <div>
                <h6>Dhruv Singh</h6>
            </div>
            <div>
               <Image src={} alt="A picture of User"/>
            </div>
        </div>
    </div>
  )
}

export default Header