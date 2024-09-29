const express = require("express")
const router = express.Router();

const { getAllMovie, addMovie} = require("../controllers/Movie")

router.get("/getAllMovie", getAllMovie);
router.post("/addMovie", addMovie);

module.exports = router