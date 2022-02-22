import React from 'react'

const RideInfo = (props) => {
    const date = new Date(props.data.date * 1000)
    const dateString = `
    ${date.getDay()} 
    ${date.toLocaleString('default', {month:'short'})} 
    ${date.getFullYear()} 
    ${date.toLocaleString('default', {hour:'numeric',hour12:false, minute:'numeric'})}
    `
  return (
    <>
        <li>Ride Id : {props.data.id} </li>
        <li>Origin Station : {props.data.origin_station_code} </li>
        <li>station_path : [{props.data.station_path.map(data=> `${data}, `)}]</li>
        <li>Date : {dateString} </li>
        <li>Distance : {props.data?.distance}</li>
    </>
  )
}

export default RideInfo