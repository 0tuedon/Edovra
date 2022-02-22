import React,{useEffect,useState} from 'react'
import Rides from '../../components/Rides'

const Upcoming = () => {
  const [sorted, setSorted] = useState([])
  useEffect(  () => {
    const getData = async ()=>{
     const res = await  fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/pastrides`)
     const data = await res.json()
     setSorted(data)
}
  getData();
},[])
  return (
    <Rides data={sorted} />
  )
}

export default Upcoming