const mongoose = require("mongoose")

const reviewSchema =new mongoose.Schema({
    movieId:{type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"Movie"
    },
    reviewerName:{type:String},
    rating:{type:Number, require:true, min: 1, max: 10 },
    reviewComments:{type: String, require:true}
})
module.exports = mongoose.model("Reviews", reviewSchema)