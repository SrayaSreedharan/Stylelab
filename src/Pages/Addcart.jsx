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

    })

  return (
    <>
    <Productnav/>
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'20px'}} >
    {data.map((items)=>(
        <Card style={{ width: '18rem',height:'400px' }}>
        <Card.Img variant="top" src={items.prdId.propimages} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            {items.prdId.propDescription}
          </Card.Text>
          <Card.Text>
            {items.prdId.propName}
          </Card.Text>
          <Card.Text>
            {items.propPrize}
          </Card.Text>
          <Card.Text>
            {items.prdId.propType}
          </Card.Text>
          <Card.Text>
            {items.__v}
          </Card.Text>
          <Card.Text>
            {items._id}
          </Card.Text>{<br></br>}
          <Button type='submit' style={{backgroundColor:'#008080',textDecoration:'none',marginLeft:'80px'}} a href='/payment'>BUY NOW</Button> 
        </Card.Body>
      </Card> 
    )
    )}
    </div>
    </>
  )
}
export default Addcart
