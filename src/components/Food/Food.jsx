import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Food.css'

const Food = ({ food, handleDetails }) => {
    const { strMeal, strMealThumb, strCategory } = food;
    return (
        <div className='food'>
            <img src={strMealThumb} alt="" />
            <div className='food-info'>
                <h3>{strMeal}</h3>
                <p>{strCategory}</p>
            </div>
            <button onClick={() => handleDetails(food)} className='btn-text'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Food;