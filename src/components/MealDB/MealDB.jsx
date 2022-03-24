import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Food from '../Food/Food';
import './MealDB.css';

const MealDB = () => {
    const [foods, setFoods] = useState([]);
    const [details, setDetails] = useState([]);
    const handleDetails = about => {
        setDetails(about);
    };
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
            .then(res => res.json())
            .then(data => setFoods(data.meals));
    }, []);
    return (
        <div className='meal'>
            <div className="food-container">
                {
                    foods.map(food => <Food food={food} handleDetails={handleDetails}></Food>)
                }
            </div>
            <div className="details-container">
                <Details details={details}></Details>
            </div>
        </div>
    );
};

export default MealDB;