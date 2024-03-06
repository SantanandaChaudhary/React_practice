import React from 'react'

const Sample = ({addTo, movieData}) => {
  return (
    <div>

      <br /> <button  className='bg-slate-400 w-[50px]' onClick={addTo}> Add 
      </button> 
      <h1> Sample Page</h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus autem doloribus corrupti iure temporibus, dolorum quam laborum possimus laboriosam nostrum.</p>

      <div className='max-w-xs   shadow-2xl mt-5 rounded-xl '>
        <img className='h-[300px] w-[320px]' src={movieData.Poster} alt="" />
        <h1 className=' ml-2 font-extrabold text-2xl'> {movieData.Title}</h1>
        <p >{movieData.Plot}</p>
      </div>
    </div>
  )
}

export default Sample
