/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router'
import { CiLogin } from "react-icons/ci";

const NavBar = ({setShowLogin}) => {
  const [menu, setmenu] = useState("home")
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/home">Savoria</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link onClick={()=> {setmenu("home")}}class="" aria-current="page" to="/home" className={`nav-link ${menu==="home"?"active":""}`}>Home</Link>
        </li>
        <li class="nav-item">
          <Link onClick={()=> {setmenu("menu")}}class="" aria-current="page" to="/menu" className={`nav-link ${menu==="menu"?"active":""}`}>Menu</Link>
        </li>
        <li class="nav-item">
          <a onClick={()=> {setmenu("contact")}}class="" aria-current="page" href="#" className={`nav-link ${menu==="contact"?"active":""}`}>Contact Us</a>
        </li>
      </ul>
        <div className="right">
        <img src={assets.profile_icon} class="profile"/>
        <Link className='basket' to="/cart"><img src={assets.basket_icon}/></Link>
        <button class="btn btn-outline-success" type="submit" onClick={()=> setShowLogin(true)}>Login <CiLogin /></button>
        </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar