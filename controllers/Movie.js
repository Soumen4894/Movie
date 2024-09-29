const Movie = require("../models/Movie")
const Reviews = require("../models/Reviews")


exports.getAllMovie = async (req, res)=>{
    try{
        const movies = await Movie.find()
        //.populate("reviews");

        if(!movies || movies.length === 0){
            return res.status(404).json({
                success:false,
                message:'No movie found'
            })
        }
        return res.status(201).json({
            success:true,
            movies:movies
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'Failed to fetch movies',
            error:error.message
        })
    }
}
exports.addMovie = async(req, res)=>{
    try{
        
        const {movieName, releaseDate} = req.body;
        const newMovie = await Movie.create({
            movieName, releaseDate
        });
        //console.log("I'm here")

        res.status(201).json({
            success: true,
            message:'Movie added Successfully'
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:'Failed to add movie'
        })
    }
}