import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [show, setShow] = useState(false);
  const navMenu = [
    {path: 'about', name : 'About'},
    {path : 'contact', name:'Contact'},
    {path :'user', name:'User'}
  ];   


  return (
    <div className='bg-green-200 text-white flex justify-between  
px-4 py-2  items-baseline'>
 

  <div className='flex flex-col space-y-2 '>
    <h1 className='text-4xl font-bold' > Demo</h1>
     {show && <div className=' sm:flex  hidden flex-col'>  {navMenu.map((nav, i)=>{
return <NavLink key={i} to={nav.path} 
className={(n)=>{
  const {isActive} = n;
  return isActive ? ' text-pink-400 ':'text-white'
}}>
  {nav.name}
</NavLink>
 })}</div>}
  </div>
  <button onClick={()=>setShow(!show)} className='hidden sm:flex'> {show ? <i className="fa-solid fa-square-xmark fa-lg"></i> : <i className="fa-solid fa-bars  fa-lg"></i>} </button>


  <nav className='space-x-5 sm:hidden'>
    {navMenu.map((nav, i)=>{
      return <NavLink key={i} to={nav.path} 
      className={(n)=>{
        const {isActive} = n;
        return isActive ? 'text-pink-400':'text-white'

      }}>
        {nav.name}
      </NavLink>

    })}

  </nav>
</div>
  )
}

export default Header
