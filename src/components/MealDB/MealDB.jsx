import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './MealDB.css';

const MealDB = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setFoods(data.meals));
    }, []);
    return (
        <div className='meal'>
            <div className="food-container">
                {
                    foods.map(food => <Food food={food}></Food>)
                }
            </div>
            <div className="details-container">
                <h1>Details Container</h1>
            </div>
        </div>
    );
};

export default MealDB;