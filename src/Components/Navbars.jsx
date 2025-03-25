import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

const Navbars = () => {
  return (
    <>
    <div className='nav'>
    <Navbar expand="lg" className="bg-body-tertiary row" >
    <Container>
      <Navbar.Brand href="/" style={{textDecoration:'none',fontSize:'36px',color:'#008080',fontFamily:'cursive'}} >STYLE-LAB</Navbar.Brand> 
          <Nav.Link href="/login" style={{textDecoration:'none',marginLeft:'850px',fontFamily:'cursive'}} className='nav' >LOGIN</Nav.Link>
          <Nav.Link href="/signup" style={{textDecoration:'none',fontFamily:'cursive'}} className='nav'>SIGN UP</Nav.Link>
    </Container>
  </Navbar>
  </div>

  <div className='nav2'>
    <Navbar expand="lg" className="bg-body-tertiary row" >
    <Container>
      <Navbar.Brand href="/" style={{textDecoration:'none',fontSize:'36px',color:'#008080',fontFamily:'cursive'}} >STYLE-LAB</Navbar.Brand> 
          <Nav.Link href="/login" style={{textDecoration:'none',fontFamily:'cursive'}} className='nav2'>LOGIN</Nav.Link>
          <Nav.Link href="/signup" style={{textDecoration:'none',fontFamily:'cursive'}} className='nav2'>SIGN UP</Nav.Link>
    </Container>
  </Navbar>
</div>
  </>
  )
}
export default Navbars
