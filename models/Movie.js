const mongoose = require("mongoose")

const movieShema = new mongoose.Schema({
    movieName:{type:String, require:true},
    releaseDate:{type:String, require:true},
})

module.exports = mongoose.model("Movie", movieShema)