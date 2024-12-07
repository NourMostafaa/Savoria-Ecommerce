import React from 'react'
import './Header.css'
import { MdExpandMore } from "react-icons/md";

const Header = () => {
  return (
    <div className='header'>
        <div className='text'>
        <h1>All Your Favorite Dishes In One Place</h1>
        <p>Choose from a diverse menu featuring a wide range of cuisines and delicious dishes from around the world</p>
        <div className='header-buttons d-flex gap-3'>
        <a className='header-btn' href='#food-display'>View Menu <MdExpandMore /></a>
        <a className='header-btn' href='#download'>Mobile App <MdExpandMore /></a>
        </div>
        </div>
    </div>
  )
}

export default Header