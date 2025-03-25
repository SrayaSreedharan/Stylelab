import React from 'react'

const Payment = () => {
  return (
    <>
     {/* <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'20px'}} >
    {data.map((items)=>(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={items.propimages} />
        <Card.Body>
          <Card.Text>
            {items.propDescription}
          </Card.Text>
          <Card.Text>
            {items.propName}
          </Card.Text>
          <Card.Text>
            {items.propPrize}
          </Card.Text>
        </Card.Body>
      </Card> 
    )
    )}
    </div> */}

    <h3>Select payment method</h3>
    Online <input type='radio' id="radio"></input>
    
           
    <p>Debit cars,Credit card,Netbanking.UPI</p>
    <h4>Cash On Delivery</h4>
    <h4>PhonePe</h4>
    <p>Debit cars,Credit card,Netbanking.UPI</p>
    <h4>Paytm</h4>

    </>
  )
}

export default Payment
