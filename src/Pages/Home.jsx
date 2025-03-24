import React from 'react'
import img from '../Pages/image.jpeg'
import ima from '../Pages/image2.jpeg'
import image from '../Pages/image4.jpeg'
import Navbars from '../Components/Navbars'
import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.css';


const Home = () => {
  return (
    <>
    <Navbars/>
    <div style={{ display: '', width: '100%',padding: 30 }}>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={img} style={{height:'550px'}}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Ladies Fashion</h3>
            <p>Fashion is a trend of modern life</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={ima} style={{height:'550px'}}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Mens Style</h3>
            <p>Fashion is always came from inside</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={image}  style={{height:'550px'}}
            alt="Image Three"
          />
          <Carousel.Caption>
            <h3>Kides cute</h3>
            <p>Fashion is a big art</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </>
  )
}

export default Home
