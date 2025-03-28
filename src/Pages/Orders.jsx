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
    },[loginId])

    const buttonClick=(id)=>{
      const orderId=id
      console.log(id)
      axios.delete(`https://reactecomapi.onrender.com/order/deleteorder/${orderId}`).then((response)=>{
        console.log(response.data)
        const filtered=data.filter((item)=>{
          return item._id !== orderId;
        })
        setData(filtered)
      }).catch((error)=>{
        console.log(error)
      })
    }

    const handleSubmit=()=>{
       const loginId= localStorage.getItem("loginId")
       console.log(loginId)
       axios.delete(`https://reactecomapi.onrender.com/order/clearorders/${loginId}`).then((response)=>{
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
        <Button type='submit' style={{backgroundColor:'red',display:'flex',justifyContent:'center',width:'100px'}} onClick={()=>buttonClick(items._id)}>DELETE</Button> 
        </Card>  
    )
    )}

<Button btn2 type='submit' id='btn1' style={{backgroundColor:'black',width:'130px',marginTop:'500px',marginLeft:'-600px'}} onClick={handleSubmit}>CLEAR ALL</Button> 

      </>)
:(
  <>
<h2 style={{textAlign:'center',color:'red',fontFamily:'cursive'}}>Your Orders is Empty.{<br></br>}Please Order products</h2> 
  </>

)      
    }
   
    </div>
       
    </>
  )
}
export default Orders
