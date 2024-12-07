/* eslint-disable array-callback-return */
import React, { useContext } from 'react'
import { StoreContext } from '../Context/Context';
import "./Cart.css"
const Cart = () => {

    const {food_list,cartItems,removeFromCart,addToCart,totalCartPrice} = useContext(StoreContext);
    const fee = totalCartPrice() === 0 ? 0 : 2
  return (
    <div className='cart text-center'>
        <h1 className='mb-5'>Cart</h1>
        <div className='cart-items'>
        {food_list.map((item, index)=>{
            if(cartItems[item._id]){
                return <div className='cart-item align-items-center'>
                    <img src={item.image} alt={item.name} className='cart-item-image'/>
                    <p className='cart-item-name'>{item.name}</p>
                    <p className='cart-item-price'>$ {item.price}</p>
                    <p className='cart-item-quantity'>Quantity: {cartItems[item._id]}</p>
                    <p className='cart-item-total'>Total : $ {item.price * cartItems[item._id]}</p>
                    <div className='quantity-buttons'>
                    <button className='btn btn-danger' onClick={()=> removeFromCart(item._id)}>-</button>
                    <button className='btn btn-success ms-4' onClick={()=> addToCart(item._id)}>+</button>
                    </div>
                </div>
            }
        })}
        </div>
        
        <div className='total mt-5 mb-5'>
            <div className='left-total'>
            <h1>Cart Totals</h1>
            <div className='cart-total-row d-flex justify-content-between'>
                <p>Subtotal</p>
                <p>{totalCartPrice()}</p>
            </div>

            <div className='cart-total-row d-flex justify-content-between'>
                <p>Delivery Fee</p>
                <p>{totalCartPrice === 0 ? 0 : fee}</p>
            </div>

            <div className='cart-total-row d-flex justify-content-between'>
                <p>Total</p>
                <p>{totalCartPrice() + fee}</p>
            </div>
            <button className='btn'>Place Order</button>
            </div>
            <div className='right-total'>
                <p className='mb-2'>If you have a promom code, enter it here</p>
                <input type="text" placeholder='Promo Code'/>
                <button className='btn'>Apply</button>
            </div>
        </div>
    </div>
  )
}

export default Cart