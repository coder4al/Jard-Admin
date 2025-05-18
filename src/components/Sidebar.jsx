import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'

const Sidebar = () => {

  const {aToken} = useContext(AdminContext)
  const {dToken} = useContext(DoctorContext)

  return (
    <div className='min-h-screen bg-white border-r border-gray-300'>
      {
        aToken && <ul className='text-gray-600 mt-5'>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-red-50 border-r-4 border-primary rounded-sm' : ''}`} to={'/admin-dashboard'}>
            <img src={assets.home_icon} alt="" />
            <p>Dashboard</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-red-50 border-r-4 border-primary rounded-sm' : ''}`} to={'/all-appointments'}>
            <img src={assets.appointment_icon} alt="" />
            <p>Appointments</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-red-50 border-r-4 border-primary rounded-sm' : ''}`} to={'/add-doctor'}>
            <img src={assets.add_icon} alt="" />
            <p>Add Doctor</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-red-50 border-r-4 border-primary rounded-sm' : ''}`} to={'/doctor-list'}>
            <img src={assets.people_icon} alt="" />
            <p>Doctors List</p>
          </NavLink>
        </ul>
      }

      {
        dToken && <ul className='text-gray-600 mt-5'>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-red-50 border-r-4 border-primary rounded-sm' : ''}`} to={'/doctor-dashboard'}>
            <img src={assets.home_icon} alt="" />
            <p>Dashboard</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-red-50 border-r-4 border-primary rounded-sm' : ''}`} to={'/doctor-appointments'}>
            <img src={assets.appointment_icon} alt="" />
            <p>Appointments</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-red-50 border-r-4 border-primary rounded-sm' : ''}`} to={'/doctor-profile'}>
            <img src={assets.people_icon} alt="" />
            <p>Profile</p>
          </NavLink>
        </ul>
      }
    </div>
  )
}

export default Sidebar