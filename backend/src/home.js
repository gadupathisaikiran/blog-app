import React, { useEffect, useState } from 'react'
import axios from "axios"
import Header from './header'

export default function Home() {

const [data,setdata]=useState()


useEffect(()=>{




    axios.get("http://localhost:4004/get").then((res)=>{

    
    setdata(res.data.result)
        
    }).catch((e)=>{
        console.log(e)
    })
    

    
},[])


console.log(data)





  return (

    <div>
   
    <Header/>
    <h1>POSTS</h1>
  
 
{
    (data!=undefined)?
    data.map((res)=>{
        return(
            <div className='display'>
            
            <h1>{res.Title}</h1>
           
            <h3>{res.Description}</h3>
            <p>{res.createdAt}</p>
            </div>
        )
    }):""
}





    
    
    </div>
  )
}
