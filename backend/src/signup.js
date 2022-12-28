import React, { useState } from 'react'
import axios from "axios"

import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();

    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [check,setcheck]=useState(false)
    
    async function register(){
    


        

    
        
      
     
        
     await axios.post("http://localhost:4004/register",{Email:email,Password:password}).then((res)=>{
    
    alert(res.data.result)

   navigate("/")


    
    }).catch((e)=>{
        console.log(e)
    })
    }


    
    function passerr(){
        alert("check password confirm")
    }
    
    
    
      return (
        <div>
    
    <h1>REGISTER  PAGE</h1>
    
        <input type="email" placeholder='Email' className='postinputfields'  onBlur={(e)=>{setEmail(e.target.value)}} /> <br/>
        
        <input type="password" placeholder='Password' className='postinputfields'  onBlur={(e)=>{setPassword(e.target.value)}} /> <br/>


        <input type="password" placeholder='confirm Password' className='postinputfields'  onBlur={(e)=>{password!==e.target.value?setcheck(true):setcheck(false)}} /> <br/>
    
        <h3 style={{color:"red"}}>{check?"password confirmation is wrong":""}</h3>

        <button type='button'  className='postbutton'  onClick={check?passerr:register}>register</button>

        
        
        </div>
      )
}
