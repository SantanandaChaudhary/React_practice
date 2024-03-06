import React, { useState } from 'react'
import Sample from './Sample';
import { movie } from '../dummy/movies_data';

const HomePage = () => {
  const [count, SetCount]= useState(0)

  const addTo =()=>{
    SetCount((prev)=> prev + 1);
  }

  const minusTo =()=>{
    SetCount((prev)=> prev -1 )
  }

  const movieData = movie;
  
  return (
    <div className='p-4'>
      <h1>{count}</h1>
      
      <button className=' bg-blue-200 mt-2.5' onClick={minusTo}> Substract </button>

      <Sample addTo={addTo} movieData={movieData}/>
    </div>
  )
}

export default HomePage
