import React from 'react'
import img from '../Pages/image.jpeg'
// import img1  from '../Pages/image1.jpeg'
import img2  from '../Pages/image2.jpeg'
import img3  from '../Pages/image3.jpeg'
import img7  from '../Pages/image8.jpeg'
import img5  from '../Pages/image7.jpeg'
import img6  from '../Pages/image6.jpeg'
import Navbars from '../Components/Navbars'
import '../Pages/Home.css'

const Home = () => {
  return (
    <>
   
    <Navbars/>
    <div className='nrml' style={{height:'630px'}}>
   <img src={img3} style={{height:'600px',width:'1500px',display:'block',marginLeft:'auto',marginRight:'auto'}} /></div>
   <div className='mob'>
   <img src={img3}   style={{height:'100%',width:'100%'}}/></div>


   <div  className='normal' style={{width: '1000px',height: '530px'}}>
          <div style={{height: '200px',width: '980px',backgroundColor:'#008080'}}>
                <div className="col-md">
                <img src={img2}  style={{marginLeft: '200px',height:"350px" ,width:"400px"}}/>
                </div> 
                <div className="col-md">  
                <h1 style={{fontSize:'95px',marginLeft: '600px',marginTop: '-330px',color:'white',fontFamily:'cursive'}}>Fashion</h1>{<br></br>}
                <p style={{marginLeft: '620px',padding: '10px',fontFamily:'cursive',marginTop:'-30px'}}>Fashion, broadly defined, encompasses the prevailing styles of clothing, accessories, and cosmetics, reflecting cultural aesthetics and used for self-expression, social status, and group identity.</p>{<br></br>}                </div>
                <div className="col-md">
                    <div style={{height: '200px',width: '500px',backgroundColor:' #EDD94C',marginLeft:'1200px',marginTop: '-80px'}}>
                    </div>
                    <div className="col-md">
                        <img src={img7}  style={{marginLeft:'980px',marginTop: '-280px',height:"350px", width:"400px"}}/>
                    </div>                    
                </div>
          </div>               
     </div>


<div className='mobile'>
     <div style={{width: '1000px',height: '580px'}}>
          <div style={{height: '400px',width: '500px',backgroundColor:'#008080',marginLeft:'50px',marginRight:'50px'}}>
                <div>
                <img src={img2}  style={{height:"350px" ,width:"400px",marginTop:'210px',marginLeft:'50px'}}/>
                </div> 
                <div>  
                <h1 style={{fontSize:'95px',marginTop: '-570px',color:'white',fontFamily:'cursive'}}>Fashion</h1>{<br></br>}
                <p style={{marginTop:'-100px',marginLeft:'20px',marginRight:'20px',fontFamily:'cursive'}}>Fashion, broadly defined, encompasses the prevailing styles of clothing, accessories, and cosmetics, reflecting cultural aesthetics and used for self-expression, social status, and group identity.</p>{<br></br>}                </div>
                <div >
                    <div style={{height: '200px',width: '500px',backgroundColor:' #EDD94C',marginTop: '500px'}}>
                    </div>
                    <div>
                        <img src={img7}  style={{marginTop: '-500px',height:"340px", width:"400px",marginLeft:'50px'}}/>
                    </div>                    
                </div>
          </div>               
     </div>
     </div>  


<div className="asian"  >
    <div style={{backgroundColor:'#6F4E37',height: '300px',width: '980px',marginTop: '40px'}}>    
        <div style={{marginLeft: '500px'}}></div>  
        <div style={{height: '400px', width:'780px',marginLeft: '780px'}}>
        <div style={{marginRight: '500px',marginLeft: '30px'}}></div>
    </div>
  </div>
    <div>
    <div  style={{display:'flex',justifyContent:'space-evenly',marginLeft:'500px',marginRight:'150px',marginTop:'-200px'}} > 
    <h1 style={{fontSize:'95px',color:'white',marginLeft:'-500px',fontFamily:'cursive'}}> Model</h1>
    <img src={img5} style={{height:'300px',width:'300px'}}></img>
    <img src={img} style={{height:'300px',width:'300px'}}></img>
    <img src={img6} style={{height:'300px',width:'300px'}}></img>
</div>
  </div>
</div> 


<div className="mob2"  >
    <div style={{backgroundColor:'#6F4E37',height: '900px',width: '500px',marginTop: '400px',marginLeft:'50px',marginRight:'50px'}}>    
        <div style={{marginLeft: '500px'}}></div>  
    </div>
    <div > 
    <h1 style={{fontSize:'95px',color:'white',marginTop:'-900px',fontFamily:'cursive'}}> Model</h1>
    <img src={img5} style={{height:'300px',width:'300px',marginLeft:'150px'}}></img>
    <img src={img} style={{height:'300px',width:'300px',marginLeft:'150px',marginTop:'30px'}}></img>
    <img src={img6} style={{height:'300px',width:'300px',marginLeft:'150px',marginTop:'30px'}}></img>
  </div>
</div> 
    </>
  )
}
export default Home
