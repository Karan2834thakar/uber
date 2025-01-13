
import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const userlogin = () => {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [userdata, setUserdata] = useState({})

     const {user, setUser} = useContext(UserDataContext)
     const navigate = useNavigate()



    const submitHandler = async (e) => {
        e.preventDefault()
       const userData={
        email:email, 
        password: password
       }

       const response =await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
        setEmail('')
        setPassword('')
        if(response.status === 200){
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token', data.token)
            navigate('/home')
    
    }
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16  mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={(e) => {submitHandler(e)}}>
            <h3 className='mb-2 text-lg font-medium'>What's your email?</h3>
            <input
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required type="email" placeholder='your email here' />
            <h3 className='mb-2 text-lg font-medium'>Enter password</h3>
            <input
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
             className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
             required type="password" placeholder='your password here' />
            <button
             className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'
            >Login</button>
        </form>
           <p className='text-center '>New Here ?  <Link to='/signup' className='text-blue-800'>Create new Account</Link></p>
        </div>
        <div>
        <Link to='/captain-login'
             className='bg-[#06626bbf] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'
            >SignIn as Captain</Link>
        </div>
    </div>
  )
}

export default userlogin