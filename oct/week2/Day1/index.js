// importing 
const express = require("express");
const app = express()

app.use(express.json())

app.get("/api", (req, res) => {
    console.log("get request clicked")
     res.send("get request called")
})

app.post("/post",(req,res)=>{
    const data=req.body;
    console.log("post request called",data);
    res.send("post request called");
})
app.put("/put",(req,res)=>{
    console.log("put request called");
    res.send("put request called")
})
app.delete("/delete",(req,res)=>{
    console.log("delete request called");
    res.send("delete request called")
})

const port = 8000;
app.listen(port, () => {
    console.log("My server is Running")
})