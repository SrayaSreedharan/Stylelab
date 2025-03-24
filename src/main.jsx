import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
import Navbars from './Components/Navbars.jsx'
import Home from './Pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Login/> */}
    {/* <Signup/> */}
    {/* <Navbars/> */}
    {/* <Home/> */}
  </StrictMode>,
)
