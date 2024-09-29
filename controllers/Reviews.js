const Reviews = require("../models/Reviews")
const Movie = require("../models/Movie")

exports.addReview = async (req, res)=>{
    try{
        const {movieId }= req.body;
        const {reviewerName, rating, reviewComments} = req.body

        const movie = await Movie.findById(movieId);
        if(!movie){
            return res.status(404).json({
                success:false,
                message:'Movie not found'
            })
        }
        const review = await Reviews.create({
            reviewerName,rating, reviewComments, movieId:movieId
        })

        return res.status(201).json({
            success:true,
            message:'Review added Successfully'
        })

    }catch(error){
        return res.status(500).json({
            success:false,
            message:'Failed to add Review',
            error:error.message
        })
    }
}
// exports.getAllRevies = async(req, res)=>{
//     try{
        

//     }catch(error){
//         console.log(error)
//     }
// }