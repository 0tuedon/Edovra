import data from "../../../data/data"

const Upcoming = (req,res) => {
    const time = Date.now()
   const sortedUpcoming = data.filter(data => 
        time < data.date * 1000
   )

   res.status(200).json(sortedUpcoming)
}

export default Upcoming;