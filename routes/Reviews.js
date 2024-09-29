const express = require("express")
const router = express.Router()
const {addReview, getAllReview }= require("../controllers/Reviews")

router.post("/addReview", addReview)
//router.get("/getAllReview", getAllReview)

module.exports = router