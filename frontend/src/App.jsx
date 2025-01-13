import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Userlogin from './pages/userlogin'
import UserSignup from './pages/usersignup' 
import Captainlogin from './pages/captainlogin'
import Captainsignup from './pages/Captainsignup'
import Homee from './pages/Homee'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'




const App = () => {
  return (
    <div>
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Userlogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<Captainlogin />} />
        <Route path='/captain-signup' element={<Captainsignup />} />
        <Route path='/home' element={
          <UserProtectedWrapper>
            <Homee />
          </UserProtectedWrapper>} />
          <Route path='/user/logout' element={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
          
          } />
          <Route path='/captain-home' element={<CaptainHome />} />
      </Routes>
      
      
    </div>
  )
}

export default App