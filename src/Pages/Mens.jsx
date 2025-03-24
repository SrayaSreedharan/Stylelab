import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Mens = () => {
    const[data,setData]=useState([])
        useEffect(()=>{
            axios.get("https://reactecomapi.onrender.com/prop/getall").then((response)=>{
                console.log(response)
                setData(response.data.data)
            }).catch((error)=>{
                console.log(error)
            })
    
        },[])
  return (
    <div>
      
    </div>
  )
}

export default Mens
