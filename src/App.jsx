import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Products from './Pages/Products';
import Women from './Pages/women';

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


    </Routes>
    </BrowserRouter>
     
    </>
  )
}
export default App
