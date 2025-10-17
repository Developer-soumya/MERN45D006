
const express = require("express");
const validation = require("../middleware/validationMiddleware");
const authenticate = require("../middleware/authMiddleware");

const router = express.Router()


router.get("/api", validation,authenticate, (req, res) => {
    console.log("get request called");
    res.send("get response")
})

router.post("/post", (req, res) => {
    const data = req.body;
    console.log("post request called", data);
    res.send("post response")
})
router.put("/put/:id", (req, res) => {
    // const id=req.params;
    // console.log("id :",id)
    // const a=req.query;
    // console.log("a :",a)
    console.log("put request called id");
    res.send("put response")
})
router.put("/put", (req, res) => {
    console.log("put request called ");
    res.send("put response")
})

router.delete("/delete/:id", (req, res) => {
    console.log("delete request called");
    res.send("delete response")
})

module.exports = router