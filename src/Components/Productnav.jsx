import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

const Productnav = () => {
  return (
    <>
    <div className='nav'>
    <Navbar expand="lg" className="bg-body-tertiary row" >
    <Container>
    <Navbar.Collapse id="basic-navbar-nav">
      <Navbar.Brand href="/" style={{textDecoration:'none',fontSize:'36px'}} >STYLE-LAB</Navbar.Brand> 
      <Nav.Link href="/products" style={{textDecoration:'none',marginLeft:'300px'}} className='nav'>Products</Nav.Link>
          <Nav.Link href="/women" style={{textDecoration:'none'}} className='nav'>Women</Nav.Link>
          <Nav.Link href="/mens" style={{textDecoration:'none'}} className='nav'>Mens</Nav.Link>
          <Nav.Link href="/kids" style={{textDecoration:'none'}} className='nav'>Kids</Nav.Link>
          <Nav.Link href="/addcart" style={{textDecoration:'none'}} className='nav'>cart</Nav.Link>
          <Nav.Link href="/" style={{textDecoration:'none'}} className='nav'>Logout</Nav.Link>
          </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>

<div className='nav2'>
<Navbar expand="lg" className="bg-body-tertiary row" >
<Container>
<Navbar.Collapse id="basic-navbar-nav">
  <Navbar.Brand href="/" style={{textDecoration:'none',fontSize:'36px'}} >STYLE-LAB</Navbar.Brand> 
  <Nav.Link href="/products" style={{textDecoration:'none'}} className='nav2'>Products</Nav.Link>
      <Nav.Link href="/women" style={{textDecoration:'none'}} className='nav2'>Women</Nav.Link>
      <Nav.Link href="/mens" style={{textDecoration:'none'}} className='nav2'>Mens</Nav.Link>
      <Nav.Link href="/kids" style={{textDecoration:'none'}} className='nav2'>Kids</Nav.Link>
      <Nav.Link href="/addcart" style={{textDecoration:'none'}} className='nav2'>cart</Nav.Link>
      <Nav.Link href="/" style={{textDecoration:'none'}} className='nav2'>Logout</Nav.Link>
      </Navbar.Collapse>
</Container>
</Navbar>
</div>
</>
  )
}
export default Productnav
