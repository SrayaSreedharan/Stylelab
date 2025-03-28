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
        console.log(response.data)
        const filtered=data.filter((item)=>{
          return item._id !== cartItemId;
        })
        setData(filtered)
      }).catch((error)=>{
        console.log(error)
      })
    }

    const handleSubmit=()=>{
      const loginId= localStorage.getItem("loginId")
      console.log(loginId)
      axios.delete(`https://reactecomapi.onrender.com/cart/clearcart/${loginId}`).then((response)=>{
           console.log(response.data)
       }).catch((error)=>{
           console.log(error)
       })
   }

  return (
    <>
    <Productnav/>
    <div className='row' style={{display:'flex',gap:'20px'}} >
      {data.length>0?(<>
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
        <Button type='button' style={{backgroundColor:'red',display:'flex',width:'100px'}} onClick={()=>buttonClick(items._id)}>DELETE</Button> {<br></br>}
      </Card> 
    )
    )}
    <Button type='button'  style={{backgroundColor:'#008080',textDecoration:'none',width:'80px',marginTop:'450px',marginLeft:'-360px'}} a href='/payment'>BUY NOW</Button> 

    <Button type='button' style={{backgroundColor:'black',width:'120px',marginTop:'450px',marginLeft:'-600px'}} onClick={handleSubmit}>CLEAR ALL</Button> 
    </>)
    :(
    <>
    <h2 style={{color:'red',fontFamily:'cursive'}}>Your Cart is Empty.{<br></br>}Please add products</h2> 
    </>
    )
  }
    
     </div>
     </>
  )
}
export default Addcart
