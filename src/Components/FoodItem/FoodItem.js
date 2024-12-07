import React, { useContext } from 'react';
import "./FoodItem.css";
import stars from '../../assets/frontend_assets/rating_starts.png';
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../Context/Context';

const FoodItem = ({ id, name, price, description, image }) => {
    const { addToCart, removeFromCart, cartItems } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <img src={image} alt={name} className='food-image' id={id} />
            {
                !cartItems[id] ? 
                <button className='btn btn-primary add' alt='' onClick={() => addToCart(id)}>Add To Cart</button> 
                : 
                <div className='food-counter'>
                    <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt='' />
                    <p>{cartItems[id]}</p>
                    <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt='' />
                </div>
            }
            <div className='food-info'>
                <div className='name-star'>
                    <p className='item-name'>{name}</p>
                    <img src={stars} alt="" className='rating-stars' />
                </div>
                <p className='item-description mb-1 mt-1'>{description}</p>
                <p className='item-price'>${price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
