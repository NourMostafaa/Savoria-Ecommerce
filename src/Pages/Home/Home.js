import React, { useState } from 'react'
import './Home.css'
import NavBar from '../../Components/NavBar/NavBar';
import Header from '../../Components/Header/Header';
import ExploreMenu from '../../Components/ExploreMenu/Category';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import Download from '../../Components/Download/Download';


const Home = ({setShowLogin}) => {
  const [category, setCategory] = useState("All");
  return (
    <div>
        <NavBar setShowLogin={setShowLogin}/>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <Download />
    </div>
  )
}

export default Home