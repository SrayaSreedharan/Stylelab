import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

const Productnav = () => {
  return (
    <div className='nav'>
    <Navbar expand="lg" className="bg-body-tertiary row" >
    <Container>
      <Navbar.Brand href="/" style={{textDecoration:'none',fontSize:'36px'}} >STYLE-HUB</Navbar.Brand> 
          <Nav.Link href="/women" style={{textDecoration:'none',marginLeft:'800px'}} className='nav'>Women</Nav.Link>
          <Nav.Link href="/mens" style={{textDecoration:'none'}} className='nav'>Mens</Nav.Link>
    </Container>
  </Navbar>
  </div>
  )
}

export default Productnav
