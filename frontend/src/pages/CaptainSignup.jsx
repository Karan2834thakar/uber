import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Captainsignup = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')

    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')


    const { captain, setCaptain } = React.useContext(CaptainDataContext)


    const submitHandler = async (e) => {
        e.preventDefault()
        const captainData = {
            fullname: {
                firstname: firstname,
                lastname: lastname
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
       
        if (response.status === 201) {
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
          }



        setEmail('')
        setFirstName('')
        setLastName('')
        setPassword('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleCapacity('')
        setVehicleType('')

    }
    return (
        <div>
            <div>
                <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1601887031610-d72bf3987fb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHViZXJ8ZW58MHx8MHx8fDA%3D)] h-screen pt-8 flex justify-between flex-col w-full '>
                    <img className='w-16 ml-9' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                    <div className='bg-white bg-transparent pb-7 py-4 px-4'>
                        <h2 className='text-3xl font-bold'>
                            Get Started with Uber
                        </h2>
                        <form onSubmit={(e) => {
                            submitHandler(e)
                        }} className='flex flex-col '>
                            <input
                                onChange={(e) => { setFirstName(e.target.value) }}
                                value={firstname} type="text" placeholder='First Name' className='text-white bg-transparent border-b-2 border-black focus:outline-none mt-6' />
                            <input
                                value={lastname}
                                onChange={(e) => { setLastName(e.target.value) }}
                                type="text" placeholder='Last Name' className=' text-white bg-transparent border-b-2 border-black focus:outline-none mt-6' />
                            <input
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                type="email" placeholder='Email' className=' text-white bg-transparent border-b-2 border-black focus:outline-none mt-6' />
                            <input
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                type="password" placeholder='Password' className=' text-white bg-transparent border-b-2 border-black focus:outline-none mt-6' />
                            <select
                                value={vehicleType}
                                onChange={(e) => { setVehicleType(e.target.value) }}
                                className='bg-transparent border-b-2 text-white border-black focus:outline-none mt-6'>
                                <option className='text-black' value="">Select Vehicle Type</option>
                                <option className='text-black' value="car">Car</option>
                                <option className='text-black' value="auto">Auto</option>
                                <option className='text-black' value="motorcycle">Motorcycle</option>
                            </select>
                            <input
                                value={vehicleColor}
                                onChange={(e) => { setVehicleColor(e.target.value) }}
                                type="text"
                                placeholder='Vehicle Color'
                                className=' text-white bg-transparent border-b-2 border-black focus:outline-none mt-6' />
                            <input
                                value={vehiclePlate}
                                onChange={(e) => { setVehiclePlate(e.target.value) }}
                                type="text"
                                placeholder='Vehicle Plate Number'
                                className='text-white bg-transparent border-b-2 border-black focus:outline-none mt-6' />
                            <input
                                value={vehicleCapacity}
                                onChange={(e) => { setVehicleCapacity(e.target.value) }}
                                type="number"
                                placeholder='Vehicle Capacity'
                                className=' text-white bg-transparent border-b-2 border-black focus:outline-none mt-6' />
                            <button className='bg-black text-white py-3 rounded mt-5'>Sign Up</button>
                        </form>
                        <p className='text-white text-center mt-4 '>Already have  account ?  <Link to='/captain-login' className='text-blue-800'>Login here</Link></p>
                        <p className='text-white text-xs mt-2 flex justify-center items-center leading-tight'>By proceeding, you concern to get calls or SMS from Uber.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Captainsignup