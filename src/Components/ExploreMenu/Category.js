import React from 'react'
import './Category.css'  
import { menu_list } from '../../assets/frontend_assets/assets'
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='category text-center'>
        <h1>Explore Our Menu</h1>
        <p className='category-text mb-3'>
            Choose a Category
        </p>
        <div className='category-list'>
            {menu_list.map((item, index) => {
                return (
                    <div onClick={()=> setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className='category-item' key={index}>
                        <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                        <p className='category-name'>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>  
        <hr/>
    </div>
  )
}

export default ExploreMenu