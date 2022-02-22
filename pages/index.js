import React, { useEffect, useState } from 'react'
import Rides from '../components/Rides';
import data from '../data/data';
const Nearest = () => {
  const [sorted, setSorted] = useState([])
  useEffect(  () => {
    const getData = async ()=>{
     const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}`)
     const data = await res.json()
     setSorted(data)
}
  getData();
},[])
  return (
  <Rides data={sorted} />
  )
}

export default Nearest