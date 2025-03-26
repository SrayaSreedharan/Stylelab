import axios from 'axios'
import React from 'react'
import { Button } from 'react-bootstrap'

const Payment = () => {

    const handleSubmit=()=>{
        const loginId= localStorage.getItem("loginId")
        console.log(loginId)
       axios.post("https://reactecomapi.onrender.com/order/checkout",{loginId}).then((response)=>{
            console.log(response)
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
                    <form  style={{backgroundColor:'white',width:'500px'}}>
                        <h2>Payment Details</h2>
                    <div>
                        <label for="name">
                            NAME{<br></br>}</label>
                        <div>
                            <input type="text" id="name" placeholder="Enter name"/>
                        </div>
                    </div>
                    <div>
                        <label for="address">
                            ADDRESS</label>
                        <div>
                        <textarea  rows={4} cols={40} />
                        </div>
                    </div>
                    <div>
                        <label for="phone">
                            PHONE NO{<br></br>}</label>
                        <div>
                        <input type="tel" id="phone" placeholder="Enter phone no"/>{<br></br>}
                        </div>
                    </div>
                    <div>
                        <label for="cardNumber">
                            CARD NUMBER{<br></br>}</label>
                        <div>
                            <input type="text" c id="cardNumber" placeholder="Valid Card Number"/>{<br></br>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-7 col-md-7">
                            <div className="form-group">
                                <label for="expityMonth">
                                    EXPIRY DATE</label>
                                <div className="col-xs-6 col-lg-6 ">
                                    <input type="text"  id="expityMonth" placeholder="MM" required />{<br></br>}
                                    <input type="text"  id="expityYear" placeholder="YY" required />{<br></br>}
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-5 col-md-5">
                                <label for="cvCode">
                                    CV CODE</label>{<br></br>}
                                <input type="password" id="cvCode" placeholder="CV" required />{<br></br>}
                                <Button  role="button" style={{marginLeft:'60px',backgroundColor:'#008080',color:'white'}}>Pay</Button>
                                <Button  role="button" style={{marginLeft:'60px',backgroundColor:'#008080',color:'white'}} onClick={handleSubmit}>check out</Button>  

                        </div>
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
