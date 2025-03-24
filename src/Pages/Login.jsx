import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import '../Pages/Login.css'
import Navbars from '../Components/Navbars';
import { IoMail } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";


const Login = () => {
    const[login,setLogin]=useState({})
    const handleChange=(e)=>{
      setLogin({...login,[e.target.name]:e.target.value})
      console.log(login)
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      axios.post("https://reactecomapi-3.onrender.com/auth/login",login).then((response)=>{
        console.log(response)
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
      <Form.Label></Form.Label>
      <div className='icon'> < IoMail/></div>
      <Form.Control type="email" placeholder="Email" onChange={handleChange} />
    </div>

    <div className='wrap2'>
      <Form.Label></Form.Label>
      <div className='icon2'> < RiLockPasswordFill/></div>
      <Form.Control type="password" placeholder="Password" onChange={handleChange} style={{marginTop:'30px'}}/>
    </div>
    <Button variant="primary" type="submit" onClick={handleSubmit}>LOGIN</Button>
    
  </Form>
  </div>
  </div>
  </>
  )
}
export default Login
