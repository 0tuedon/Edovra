import React from 'react'
import { useEffect,useState } from 'react'
import Ride from './Ride'

import RidesData from "../../data/data"
const Rides = (props) => {
    console.log(props)
  return (
      <div className='px-8'>
          {props?.data?.map(data => <Ride key={data.id} data={data} />)}
          {props?.data?.length === 0? <h4>There is no ride yet </h4>:null}
      </div>
  )
}

export default Rides;