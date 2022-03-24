import React from 'react';
import './Details.css'

const Details = ({ details }) => {
    const {strMeal, strCategory, strArea, strInstructions} = details;
    return (
        <div className='details'>
            <h3 className='details-head'>More About {strMeal}</h3>
            <p>Category: {strCategory}</p>
            <p>Area: {strArea}</p>
            <p>Instructions: {strInstructions}</p>
        </div>
    );
};

export default Details;