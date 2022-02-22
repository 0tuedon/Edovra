import data from "../../../data/data"
import { User } from "../../../data/data"
import lodash from 'lodash'
const  filterRouter = (req,res)=>
{   
   data.map(data => {
        data.station_path.map( values =>{
            const  distance =  Math.abs(
                    values - User.station_code
               )
               data.distancePath.push(distance)
               
            }
            )
            data.distance = (lodash.min(data.distancePath))
        }
           
        )
    const sortedArray = data.sort((a,b)=>{
        return a.distance - b.distance
    })
    res.status(200).json(sortedArray)
}

export default filterRouter