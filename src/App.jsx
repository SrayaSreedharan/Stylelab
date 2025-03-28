import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Products from './Pages/Products';

import Mens from './Pages/Mens';
import Addcart from './Pages/Addcart';
import Payment from './Pages/Payment';
import Orders from './Pages/Orders';
import Kids from './Pages/Kids';
import Women from './Pages/Women';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/> 
      <Route path="/products" element={<Products/>}/> 
      <Route path="/women" element={<Women/>}/> 
      <Route path="/mens" element={<Mens/>}/> 
      <Route path="/addcart" element={<Addcart/>}/> 
      <Route path="/payment" element={<Payment/>}/> 
      <Route path="/orders" element={<Orders/>}/> 
    </Routes>
    </BrowserRouter>
   
    </>
  )
}
export default App
