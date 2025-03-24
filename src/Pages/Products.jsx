import axios from 'axios';
import React, { useState,useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Productnav from '../Components/Productnav';
import '../Pages/Product.css'

const Products = () => {
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
            {items.propType}
          </Card.Text>
          <Card.Text>
            {items.propimages.status}
          </Card.Text>
          <Card.Text>
            {items.propimages.__v}
          </Card.Text>
          <Card.Text>
            {items.propimages._id}
          </Card.Text> 
        </Card.Body>
      </Card>
      
    )
    )}
    </div>

    </>
  )
}

export default Products
