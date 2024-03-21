import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
  const nav = useNavigate();
  return (
    <div className='bg-green-200 text-white flex justify-between  
px-4 py-2  items-baseline'>
  <h1  onClick={()=>nav('/')} className='text-3xl cursor-pointer'> Logo</h1>
  <nav className='space-x-5 '>
    <NavLink to="about" className={(n)=>{
      const { isActive} = n;
      return isActive ? 'text-pink-900':'text-white'
    }}> About </NavLink>
    <NavLink to="contact">Contact</NavLink>
    <NavLink to="add-daily ">Add daily</NavLink>
  </nav>
</div>
  )
}

export default Header
