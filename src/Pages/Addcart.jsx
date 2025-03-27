import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Productnav from '../Components/Productnav'
import '../Pages/Product.css'

const Addcart = () => {
    const[data,setData]=useState([])
    const loginId= localStorage.getItem("loginId")
    useEffect(()=>{
        axios.get(`https://reactecomapi.onrender.com/cart/getcart/${loginId}`).then((response)=>{
            console.log(response)
            localStorage.getItem("loginId")
            setData(response.data.data)
        }).catch((error)=>{
            console.log(error)
        })
      },[loginId])

    const buttonClick=(id)=>{
      const cartItemId=id
      console.log(cartItemId)
      axios.delete(`https://reactecomapi.onrender.com/cart/deletecart/${cartItemId}`).then((response)=>{
        console.log(response)
      }).catch((error)=>{
        console.log(error)
      })
    }

    const handleSubmit=()=>{
      const loginId= localStorage.getItem("loginId")
      console.log(loginId)
      axios.delete(`https://reactecomapi.onrender.com/cart/clearcart/${loginId}`).then((response)=>{
           console.log(response)
       }).catch((error)=>{
           console.log(error)
       })
   }

  return (
    <>
    <Productnav/>
    <div className='row' style={{display:'flex',gap:'20px'}} >
    {data.map((items)=>(
        <Card style={{ width: '18rem',height:'400px' }}>
        <Card.Img variant="top" src={items.prdId.propimages} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
          Product Description:
          {items.propDescription}
          </Card.Text>
          <Card.Text>
          Product Name:
          {items.propName}
          </Card.Text>
          <Card.Text>
          Product Prize:
          {items.propPrize}
          </Card.Text>
          <Card.Text>
          Product Type:
          {items.propType}
          </Card.Text>
        </Card.Body>
        <Button type='submit' style={{backgroundColor:'#008080',textDecoration:'none',display:'flex',width:'80px',marginLeft:'20px'}} a href='/payment'>BUY NOW</Button> 
        <Button type='submit' style={{backgroundColor:'red',display:'flex',width:'100px',marginTop:'-53px',marginLeft:'160px'}} onClick={()=>buttonClick(items._id)}>DELETE</Button> 
      </Card>  
    )
    )}
    </div>{<br></br>}
    <Button type='submit' style={{backgroundColor:'black',display:'flex',width:'130px',justifyContent:'center'}} onClick={handleSubmit}>CLEAR ALL</Button> 
    </>
  )
}
export default Addcart
