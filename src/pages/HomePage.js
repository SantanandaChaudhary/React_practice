import React from 'react'
import { meals } from '../dummy/Meal_data'
import { useNavigate } from 'react-router'

const HomePage = () => {
  const nav = useNavigate();
  return (
    <div className='p-5 grid grid-cols-3  '>
      {meals.map((meal)=>{
            return <div key={meal.idCategory} className='shadow-2xl cursor-pointer' onClick={()=>nav(`/detail/${meal.idCategory}`,{state:meal})}>
              <h1>{meal.strCategory}</h1>
              <img src={meal.strCategoryThumb} alt="" />
              <p> {meal.strCategoryDescription.substring(0,40) + '....'}</p>
                   </div>
      })}

      
    </div>
  )
}

export default HomePage
