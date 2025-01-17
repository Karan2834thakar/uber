
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const usersignup = () => {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userdata, setUserdata] = useState({})

    const navigate = useNavigate()
    const {user, setUser} = React.useContext(UserDataContext)

    const submitHandler = async (e) => { 
        e.preventDefault()
        const newUser = {
            email: email,
            password: password,
            fullname:{
                firstname: firstName,
                lastname: lastName 
            }
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

        if(response.status === 201){
           const data= response.data
               
           setUser(data.user)

              localStorage.setItem('token', data.token) 

            navigate('/home')
        }

        console.log(userdata)
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
    }     
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1603928087797-0e3eaa5cfc2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHx1YmVyfGVufDB8fDB8fHww)] h-screen pt-8 flex justify-between flex-col w-full '>
             <img className='w-16 ml-9' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-3xl font-bold'>
                    Get Started with Uber
                </h2>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} className='flex flex-col '>
                    <input
                    onChange={(e) => {setFirstName(e.target.value)}}
                     value={firstName} type="text" placeholder='First Name' className='border-b-2 border-black focus:outline-none mt-6'/>
                    <input
                    value={lastName}
                    onChange={(e) => {setLastName(e.target.value)}}
                    type="text" placeholder='Last Name' className='border-b-2 border-black focus:outline-none mt-6'/>
                    <input
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}    
                    type="email" placeholder='Email' className='border-b-2 border-black focus:outline-none mt-6'/>
                    <input
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                    type="password" placeholder='Password' className='border-b-2 border-black focus:outline-none mt-6'/>
                    <button className='bg-black text-white py-3 rounded mt-5'>Sign Up</button>
                </form>
                <p className='text-center mt-4 '>Already have  account ?  <Link to='/login' className='text-blue-800'>Login here</Link></p>
                <p className='text-xs mt-2 flex justify-center items-center leading-tight'>By proceeding, you concern to get calls or SMS from Uber.</p>
            </div>
    
        </div>
    </div>
  )
}

export default usersignup