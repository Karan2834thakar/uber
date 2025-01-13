import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Userlogin from './pages/userlogin'
import UserSignup from './pages/usersignup' 
import Captainlogin from './pages/captainlogin'
import Captainsignup from './pages/Captainsignup'




const App = () => {
  return (
    <div>
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Userlogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<Captainlogin />} />
        <Route path='/captain-signup' element={<Captainsignup />} />
      </Routes>
      
      
    </div>
  )
}

export default App