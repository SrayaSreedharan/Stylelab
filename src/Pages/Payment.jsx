import axios from 'axios'
import React from 'react'
import { Button } from 'react-bootstrap'

const Payment = () => {
    const handleSubmit=()=>{
        const loginId= localStorage.getItem("loginId")
        console.log(loginId)
       axios.post("https://reactecomapi.onrender.com/order/checkout",{loginId}).then((response)=>{
            console.log(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    
  return (
    <>
<div className="container">
    <div className="row">
        <div class="col-xs-12 col-md-4">
                <div>
                    <form  style={{backgroundColor:'white',width:'400px',border:'1px solid',height:'670px',marginLeft:'60px',fontFamily:'cursive',marginRight:'50px',justifyContent:'center'}}>
                        <h2 style={{textAlign:'center'}}>Payment Details</h2>
                    <div style={{marginLeft:'30px'}}>
                        <label for="name">NAME</label>{<br></br>}
                        <input type="text" id="name" placeholder="Enter name"/>{<br></br>}
                  
                        <label for="address" >ADDRESS</label>{<br></br>}
                        <textarea  rows={3} cols={38} placeholder="Enter address" style={{marginLeft:'35px'}}/>{<br></br>}
                    
                        <label for="phone">PHONE NO</label>{<br></br>}
                        <input type="tel" id="phone" placeholder="Enter phone no"/>{<br></br>}
                    
                        <label for="cardNumber">CARD NUMBER</label>{<br></br>}
                        <input type="text" id="cardNumber" placeholder="Valid Card Number"/>{<br></br>}
                    </div>
                    <div className="row" style={{marginLeft:'30px'}}>
                        <div className="col-xs-7 col-md-7">
                            <label for="expityMonth">EXPIRY DATE</label>
                            <input type="text"  id="expityMonth" placeholder="MM"  style={{width:'120px',marginLeft:'38px'}} required />
                            <input type="text"  id="expityYear" placeholder="YY" style={{width:'120px',marginTop:'-40px',marginLeft:'180px'}} required />{<br></br>}
                        </div>
                    </div>
                    <div className="col-xs-5 col-md-5" style={{marginLeft:'30px'}}>
                            <label for="cvCode">CV CODE</label>{<br></br>}
                            <input type="password" id="cvCode" placeholder="CV" required />{<br></br>}
                            <Button  role="button" style={{backgroundColor:'#008080',color:'white'}}>Pay</Button>
                            <Button  role="button" style={{marginLeft:'30px',backgroundColor:'#008080',color:'white'}} onClick={handleSubmit}>check out</Button>  
                    </div>
                    </form>
                </div>
            </div> 
        </div>
    </div>
    </>
  )
}
export default Payment
