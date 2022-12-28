import React, { useState } from 'react'
import axios from "axios"
import './App.css';
import { useNavigate } from "react-router-dom";

const Sign =()=> {
    const navigate = useNavigate();
const [Email,setEmail]=useState()
const [Password,setPassword]=useState()



async function Signin(){

  
  
    
  
 
    
 await axios.post("http://localhost:4004/signin",{Email:Email,Password:Password}).then((res)=>{

alert(res.data.result)

res.data.sucess?navigate("/home"):alert("check details")

}).catch((e)=>{
    console.log(e)
})
}





  return (
    <div>

<h1>SIGN IN PAGE</h1>

    <input type="email" placeholder='Email' className='postinputfields'   onBlur={(e)=>{setEmail(e.target.value)}} /> <br/>
    
    <input type="password" placeholder='Password' className='postinputfields' onBlur={(e)=>{setPassword(e.target.value)}} /> <br/>

    <button type='button'  className='postbutton'  onClick={Signin}>signin</button><br/>
    
    <a href='/register'><button className='postbutton'>register</button></a>
    
    </div>
  )
}

export default Sign