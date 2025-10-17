const mongoose=require("mongoose");

const connectDB=async()=>{
    try {
        const conne=await mongoose.connect(process.env.mongoDb_Url);
        console.log("Db connected")
    } catch (error) {
        console.log("error",error)
    }
}

module.exports=connectDB