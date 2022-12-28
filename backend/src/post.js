import React, { useState } from 'react'
import axios from "axios"
import './App.css';
import Header from './header';
import { useNavigate } from "react-router-dom";

export default function Post() {

    const navigate = useNavigate();

    const[title,settitle]=useState()

    const[description,setdescription]=useState()


    const[image,setimage]=useState()




   const post=async ()=>{


   

    
 await axios.post("http://localhost:4004/post",{Title:title,Description:description}).then((res)=>{

alert("posted sucessfully")

console.log(res)
navigate("/home")

}).catch((e)=>{
    console.log(e)
})


   }




  return (
    <div > 

<Header/>

<h1>WRITE A POST!!</h1>


    
     <input className='postinputfields' type="text" placeholder="title" onBlur={(e)=>{settitle(e.target.value)}}/> <br/>

   

    <input className='postinputfields' style={{height:"150px"}} type="text" placeholder='description' onBlur={(e)=>{setdescription(e.target.value)}}  /><br/>
   
    
    
   
   <button type='button' className='postbutton'  onClick={post}>post</button>

    
    
    </div>
  )
}
