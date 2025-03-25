import React from 'react'
import { Button } from 'react-bootstrap'

const Payment = () => {
  return (
    <>
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-md-4">
                <div>
                    <form  style={{backgroundColor:'white',height:'700px',marginTop:'-5px'}}>
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
                            ADDRESS{<br></br>}</label>
                        <div>
                        <textarea  rows={4} cols={40} />{<br></br>}
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
                            <input type="text" class="form-control" id="cardNumber" placeholder="Valid Card Number"/>{<br></br>}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-7 col-md-7">
                            <div class="form-group">
                                <label for="expityMonth">
                                    EXPIRY DATE</label>
                                <div class="col-xs-6 col-lg-6 ">
                                    <input type="text" class="form-control" id="expityMonth" placeholder="MM" required />{<br></br>}
                                    <input type="text" class="form-control" id="expityYear" placeholder="YY" required />{<br></br>}
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-5 col-md-5">
                                <label for="cvCode">
                                    CV CODE</label>{<br></br>}
                                <input type="password" class="form-control" id="cvCode" placeholder="CV" required />{<br></br>}
                                <Button  role="button" style={{marginLeft:'60px',backgroundColor:'#008080',color:'white'}}>Pay</Button>                          
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
