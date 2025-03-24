import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import '../Pages/Login.css'
import Navbars from '../Components/Navbars';
import { IoMail } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { Navigate, useNavigate } from 'react-router-dom';


const Login = () => {
    const[login,setLogin]=useState({})
    const[error,setError]=useState({})
    const handleChange=(e)=>{
      setLogin({...login,[e.target.name]:e.target.value})
      console.log(login)
    }


     const navigate=useNavigate()

    const validate=()=>{
      const errorMessage={}
      
      if(!login.username){
          errorMessage.username="Enter Name"
      }
      if(!login.password){
        errorMessage.password="Enter password"
    }
  setError(errorMessage)
    return Object.keys(errorMessage).length===0
   }


    const handleSubmit=(e)=>{
      if(!validate()){
        console.log("error")
    }
      e.preventDefault()
      axios.post("https://reactecomapi.onrender.com/auth/login",login).then((response)=>{
        console.log(response)
        navigate('/products')
      }).catch((error)=>{
        console.log(error)
      })
    }


  return (
    <>
    <Navbars/>
   <div className='mobile'>
    <div className='img'>
    <Form style={{border:'2px solid white',height:'360px'}}>
    <h1 style={{ color: "BLACK" }}>LOGIN</h1>

    <div className='wrap'>
      <Form.Label  style={{color:'red'}}>{error.username}</Form.Label>
      <div className='icon'> < IoMail/></div>
      <Form.Control type="text" placeholder="Username" name='username' onChange={handleChange} />
    </div>

    <div className='wrap2'>
      <Form.Label style={{color:'red'}}>{error.password}</Form.Label>
      <div className='icon2'> < RiLockPasswordFill/></div>
      <Form.Control type="password" placeholder="Password"  name='password' onChange={handleChange} style={{marginTop:'30px'}}/>
    </div>
    <Button variant="primary" type="submit" onClick={handleSubmit}>LOGIN</Button>
    
  </Form>
  </div>
  </div>
  </>
  )
}
export default Login
