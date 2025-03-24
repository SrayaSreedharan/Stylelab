import React from 'react'
import img from '../Pages/image.jpeg'
import Navbars from '../Components/Navbars'



const Home = () => {
  return (
    <>
    <Navbars/>
   <img src={img} style={{height:'400px',width:'1400px',borderRadius:'30px',display:'block',marginLeft:'auto',marginRight:'auto'}} />
          
    </>
  )
}

export default Home
