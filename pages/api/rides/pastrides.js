import data from "../../../data/data"

const Past = (req,res) => {
    const time = Date.now()
   const sortedPast = data.filter(data => 
        time > data.date *1000
   )

   res.status(200).json(sortedPast)
}

export default Past;