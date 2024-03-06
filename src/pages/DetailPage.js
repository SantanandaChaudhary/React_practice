import React from 'react'
import { useLocation } from 'react-router'

const DetailPage = () => {
  const {state} = useLocation();
  return (
    <div>
      <h1>{state.strCategory}</h1>
      <img src={state.strCategoryThumb} alt="" />
      <p> {state.strCategoryDescription}</p>
    

    </div>
  )
}

export default DetailPage
