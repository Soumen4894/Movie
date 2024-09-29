const express = require("express");
app = express();
const dotenv = require("dotenv")
const database = require("./config/database")
const movieRoutes = require("./routes/Movie")
const reviewRoutes = require("./routes/Reviews")
dotenv.config();

database.connect();

const PORT =process.env.PORT || 4000;

app.use(express.json());

app.use("/api/movie", movieRoutes);
app.use("/api/reviews", reviewRoutes);

app.get("/", (req, res)=>{
    return res.json({
        success: true,
        message: "Your server is up and running...."
    });
});

app.listen(PORT, ()=>{
    console.log(`App is running at ${PORT}`)
})