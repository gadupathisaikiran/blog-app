const express = require("express")
const bcrypt = require('bcrypt')
const cloudinary=require("cloudinary").v2
const router = express.Router()
const model = require("../model/signin")
const postmodel=require("../model/post")
const cors=require("cors")
const fileupload=require("express-fileupload")

const bodyparser = require("body-parser")

router.use(bodyparser.json())
router.use(cors())


router.use(fileupload({
  useTempFiles : true,
  
}));




router.post("/register", async (req, res) => {

  const painpassword = req.body.Password



  if(painpassword&&req.body.Email){



  bcrypt.hash(painpassword, 10, async (err, hash) => {



    console.log(hash)


    const check = await model.findOne({ Email: req.body.Email })

    console.log(check)

    if (check) {

      res.send({
        result: "user already exists"
      })


    } else {
      const register = await model.create({ Email: req.body.Email, Password: hash })

      res.send({
        result: "registed sucessfully"
      })



    }

  });
}

else{
  res.send({
    result:"enter deatils"
})
}

})



router.post("/signin", async (req, res) => {


  const check = await model.findOne({ Email: req.body.Email })


  bcrypt.compare(req.body.Password,check.Password, function (err, result) {

    if (result) {

      res.send({
        result: "Login sucessfull",
        sucess:"sucess"
      })

    }
    else {

     

      res.send({
        result: "not a corect password"
      })
    }

  });

})

    



router.post("/post", async (req, res) => {

  try {

   

      await postmodel.create({ Title: req.body.Title, Description: req.body.Description })


      res.send({

        result: "posted sucessfully"
      })





    }
          
        
        catch (e) {

  res.send({
    error: "e.message"
  })


}
    


      })






      
    

      router.get("/get" ,async (req,res)=>{

try{
  const get=await postmodel.find().limit(20)

  res.send({
    result:get
  })


}
catch(e){

  res.send({
    result:e.message
  })
}

      })











module.exports = router