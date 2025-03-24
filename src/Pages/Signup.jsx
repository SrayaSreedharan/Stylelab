import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import Navbars from '../Components/Navbars';
import { FaUser } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";


const Signup = () => {
    const[signup,setSignup]=useState({})
    const[error,setError]= useState({}) 
    
    const handleChange=(e)=>{
      setSignup({...signup,[e.target.name]:e.target.value})
      console.log(signup)
    }

    const navigate=useNavigate()

    const validate=()=>{
      const errorMessage={}
      
      if(!signup.name){
          errorMessage.name="Enter Name"
      }
      if(!signup.phone){
          errorMessage.phone="Enter number"
      }
      else if(!(/^\d{10}$/).test(signup.number)){
          errorMessage.number="password should be 10 digits long"
      }
  
      if(!signup.email){
          errorMessage.email="Enter email"
      }
      if(!signup.username){
        errorMessage.username="Enter username"
    }
  
      if(!signup.password){
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
      axios.post("https://reactecomapi.onrender.com/auth/usersignup",signup).then((response)=>{
        console.log(response)
        navigate('/login')
  
      }).catch((error)=>{
        console.log(error)
      })
    }
  return (
    <>
    <Navbars/>
    <Form style={{border:'2px solid white',height:'450px',marginTop:'40px'}}>
    <h1 style={{ color: "BLACK" }}>SIGNUP </h1>

    <div className='wrap'>
      <Form.Label style={{color:'red'}}>{error.name}</Form.Label>
      <div className='icon'><FaUser /></div>
      <Form.Control type="text" placeholder="name" name="name"  onChange={handleChange} required/>
    </div>{<br></br>}

    <div className='wrap'>
      <Form.Label style={{color:'red'}}>{error.number}</Form.Label>
      <div className='icon'><FaPhoneSquareAlt /></div>
      <Form.Control type="tel" placeholder="Phone"  name="phone" onChange={handleChange} required/>
    </div>{<br></br>}

    <div className='wrap'>
      <Form.Label style={{color:'red'}}>{error.email}</Form.Label>
      <div className='icon'><IoMail /></div>
      <Form.Control type="mail" placeholder="Email" name="email" onChange={handleChange} required/>
    </div>{<br></br>}

    <div className='wrap'>
      <Form.Label style={{color:'red'}}>{error.username}</Form.Label>
      <div className='icon'><RiLockPasswordFill /></div>
      <Form.Control type="text" placeholder="username"  name="username" onChange={handleChange} required/>
    </div>{<br></br>}

    <div className='wrap'>
      <Form.Label style={{color:'red'}}>{error.password}</Form.Label>
      <div className='icon'><RiLockPasswordFill /></div>
      <Form.Control type="password" placeholder="Password"  name="password"onChange={handleChange} required/>
    </div>{<br></br>}
    <Button variant="primary" onClick={handleSubmit}>SIGNUP</Button>

  </Form>
  </>
  )
}
export default Signup
