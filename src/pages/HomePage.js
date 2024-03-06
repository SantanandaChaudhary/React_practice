import React, { useState } from 'react'
import ContactPage from './ContactPage';

const HomePage = () => {
  const [data, setData ]= useState([])

  const addSome = (obj)=>{
   setData([...data, obj])
   }
  
   const remove = (index)=>{
    data.splice(index,1)
    setData([...data])
   }

  return (
    <div >   
      <ContactPage addSome={addSome} />
      
        {data.map((post , i)=>{
          return <div key={i} className='m-5 p-2 shadow-2xl max-w-xs space-y-2 flex items-baseline justify-between'>
            <div>
              <h1> {post.title}</h1>
              <p>{post.description}</p>
            </div>
            <button onClick={()=>remove(i)}><i className="fa-solid fa-trash"></i></button>
            
          </div>
        })}
      
    </div>
  )
}

export default HomePage
