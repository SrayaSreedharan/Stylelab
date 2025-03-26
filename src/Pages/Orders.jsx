import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Productnav from '../Components/Productnav'
import '../Pages/Product.css'

const Orders = () => {
    const[data,setData]=useState([])
    const loginId= localStorage.getItem("loginId")
    useEffect(()=>{
        axios.get(`https://reactecomapi.onrender.com/order/userorders/${loginId}`).then((response)=>{
        console.log(response.data)
        localStorage.getItem("loginId")
        setData(response.data.data)
        }).catch((error)=>{
            console.log(error)
        })
    })

    const buttonClick=(_id)=>{
      const orderId=_id
      console.log(_id)
      const loginId=localStorage.getItem("loginId")
      axios.post(`https://reactecomapi.onrender.com/order/deleteorder/${loginId} & ${orderId}`).then((response)=>{
        console.log(response.data)
      }).catch((error)=>{
        console.log(error)
      })
    }

    const handleSubmit=()=>{
       const loginId= localStorage.getItem("loginId")
       console.log(loginId)
       axios.get(`https://reactecomapi.onrender.com/order/clearorders/${loginId}`).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
    
        })
    }

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
          </Card.Text>
        </Card.Body>
    <Button type='submit' style={{backgroundColor:'#008080',display:'flex',justifyContent:'center'}} onClick={()=>buttonClick(items._id)}>DELETE</Button> 
      </Card>  
    )
    )}
    </div>{<br></br>}
    <Button type='submit' style={{backgroundColor:'red',display:'flex',justifyContent:'center'}} onClick={handleSubmit}>CLEAR ALL</Button> 
    </>
  )
}
export default Orders
