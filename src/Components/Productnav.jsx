import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

const Productnav = () => {
  return (
    <>
    <div className='nav' >
    <Navbar expand="lg" className="bg-body-tertiary row" >
    <Container>
      <Nav.Link href="/" style={{textDecoration:'none',fontSize:'36px',color:'#008080',fontFamily:'cursive'}} >STYLE-LAB</Nav.Link>
      <Nav.Link href="/products" style={{textDecoration:'none',marginLeft:'160px',fontFamily:'cursive'}} className='nav'>Products</Nav.Link>
          <Nav.Link href="/women" style={{textDecoration:'none',fontFamily:'cursive'}} className='nav'>Women</Nav.Link>
          <Nav.Link href="/mens" style={{textDecoration:'none',fontFamily:'cursive'}} className='nav'>Mens</Nav.Link>
          <Nav.Link href="/kids" style={{textDecoration:'none',fontFamily:'cursive'}} className='nav'>Kids</Nav.Link>
          <Nav.Link href="/addcart" style={{textDecoration:'none',fontFamily:'cursive'}} className='nav'>Cart</Nav.Link>
          <Nav.Link href="/orders" style={{textDecoration:'none',fontFamily:'cursive'}} className='nav'>Orders</Nav.Link>
          <Nav.Link href="/kids" style={{textDecoration:'none',fontFamily:'cursive'}} className='nav'>Logout</Nav.Link>
    </Container>
  </Navbar>
  </div>

<div className='nav2'>
<Navbar expand="lg" className="bg-body-tertiary row" >
<Container>
<Navbar.Collapse id="basic-navbar-nav">
  <Navbar.Brand href="/" style={{textDecoration:'none',fontSize:'36px',color:'#008080',fontFamily:'cursive'}} >STYLE-LAB</Navbar.Brand> 
  <Nav.Link href="/products" style={{textDecoration:'none',fontFamily:'cursive'}} className='nav2'>Products</Nav.Link>
      <Nav.Link href="/women" style={{textDecoration:'none',fontFamily:'cursive'}} className='nav2'>Women</Nav.Link>
      <Nav.Link href="/mens" style={{textDecoration:'none',fontFamily:'cursive'}} className='nav2'>Mens</Nav.Link>
      <Nav.Link href="/kids" style={{textDecoration:'none',fontFamily:'cursive'}} className='nav2'>Kids</Nav.Link>
      <Nav.Link href="/addcart" style={{textDecoration:'none',fontFamily:'cursive'}} className='nav2'>Cart</Nav.Link>
      <Nav.Link href="/orders" style={{textDecoration:'none',fontFamily:'cursive'}} className='nav2'>Orders</Nav.Link>
      <Nav.Link href="/kids" style={{textDecoration:'none',fontFamily:'cursive'}} className='nav2'>Logout</Nav.Link>
      </Navbar.Collapse>
</Container>
</Navbar>
</div>
</>
  )
}
export default Productnav
