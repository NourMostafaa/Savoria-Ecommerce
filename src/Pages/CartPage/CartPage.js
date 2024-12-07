import React from 'react'
import './CartPage.css'
import  Navbar  from '../../Components/NavBar/NavBar'
import Cart from '../../Components/Cart/Cart'
const CartPage = ({setShowLogin}) => {
  return (
    <div className='cart-page'>
      <Navbar setShowLogin={setShowLogin}/>
      <Cart/>
    </div>
  )
}

export default CartPage