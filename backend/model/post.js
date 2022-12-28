const mongoose=require("mongoose")

const schema=mongoose.Schema

const postmodel=new schema({
 

Title:String,
Description:String



},{timestamps:true})

const post=mongoose.model("post",postmodel)

module.exports=post

