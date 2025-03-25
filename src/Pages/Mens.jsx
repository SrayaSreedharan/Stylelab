import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Productnav from '../Components/Productnav'
import '../Pages/Product.css'
import { Button } from 'react-bootstrap';

const Mens = () => {
    const[data,setData]=useState([])
        useEffect(()=>{
            axios.get("https://reactecomapi.onrender.com/prop/getall/mens").then((response)=>{
                console.log(response)
                setData(response.data.data)
            }).catch((error)=>{
                console.log(error)
            })
    
        },[])

        const buttonClick=(id)=>{
          const prdId=id
          console.log(id)
          const loginId=localStorage.getItem("loginId")
          console.log(loginId)
          axios.post("https://reactecomapi.onrender.com/cart/addtocart",{prdId,loginId}).then((response)=>{
            console.log(response.data.data)
            localStorage.getItem("loginId")
          }).catch((error)=>{
            console.log(error)
          })
        }
  return (
    <>
    <Productnav/>
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'20px'}} >
    {data.map((items)=>(
     <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src={items.propimages} />
     <Card.Body>
       <Card.Title></Card.Title>
       <Card.Text>
         {items.propDescription}
       </Card.Text>
       <Card.Text>
         {items.propName}
       </Card.Text>
       <Card.Text>
         {items.propPrize}
       </Card.Text>
       <Card.Text>
         {items.propType}
       </Card.Text>
       <Card.Text>
         {items.__v}
       </Card.Text>
       <Card.Text>
         {items._id}
       </Card.Text> 
       <Button type='submit' onClick={()=>buttonClick(items._id)} style={{backgroundColor:'#008080',marginLeft:'60px'}}>Add to cart</Button>
     </Card.Body>
   </Card>
 )
 )}
 </div>
 </>
    
  )
}

export default Mens
