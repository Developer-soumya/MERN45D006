const express = require("express");
const dotenv = require("dotenv");
const mongoose=require("mongoose")
// const connectDB = require("./db");

dotenv.config();


const app = express();



app.use(express.json());


app.use((req, res) => {
    res.send("Hello to rocky tattooz backend");
});

const PORT = process.env.PORT;
app.listen(PORT, async () => {
    try {
        console.log(`🚀 Server running on port ${PORT}`)
        const conne = await mongoose.connect(process.env.mongoDb_Url);
        console.log("Db connected")

    } catch (error) {
        console.log("error", error)
    }

});
