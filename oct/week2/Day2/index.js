const express = require("express");

const app = express();
const allRoutes=require("./routes/AllRoutes")


app.use(express.json())

app.use("/main",allRoutes)

app.listen(8000, () => {
    console.log("My server is running")
})
