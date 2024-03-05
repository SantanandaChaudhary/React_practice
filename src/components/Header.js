import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-green-200 text-white flex justify-between  
px-4 py-2  items-baseline'>
  <h1 className='text-3xl'> Logo</h1>
  <nav className='space-x-5 '>
    <NavLink to="about" className={(n)=>{
      const { isActive} = n;
      return isActive ? 'text-pink-900':'text-white'
    }}> About </NavLink>
    <NavLink to="contact">Contact</NavLink>
    <NavLink to="user "> USer</NavLink>
  </nav>
</div>
  )
}

export default Header
