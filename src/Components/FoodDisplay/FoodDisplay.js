import React from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../Context/Context';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {

    const {food_list} = React.useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
        <h2 className='text-center mb-3'>{category === "All" ? "Top Dishes" : `${category} Dishes`}</h2>
        <div className='food-list'>
            {food_list.map((item, index)=>{
                if(category === "All" || category === item.category){
                  return <FoodItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price}/>
                }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay