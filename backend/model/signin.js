const mongoose=require("mongoose")

const schema=mongoose.Schema

const model=new schema({
 
    Email:String,
    Password:String

},{timestamps:true})

const signin=mongoose.model("signin",   model)

module.exports=signin

