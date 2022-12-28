const express=require("express")

const mongoose=require("mongoose")
const user=require("./router/user")
const cors=require("cors")

const app=express()
app.use(cors())

app.use(user)







const main=async ()=>{


    await mongoose.connect("mongodb+srv://test:test123@cluster0.bgdbs80.mongodb.net/?retryWrites=true&w=majority").then(()=>{


    console.log("connected to mongo")

    }).catch((e)=>{
        console.log(e)
    })

}

main()

app.listen(4004,()=>{console.log("port is listening")})