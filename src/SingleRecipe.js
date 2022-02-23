import React from 'react';
import './Recipe.css';

const SingleRecipe = ({id, title, image, missedIngredients}) => {
    return(
        <li className='recipeCard'>
            <div className="contentWrapper">
                <div className="image">
                    <img src={image} alt="recipe" />
                </div>
                <div className='recipeInfo'>
                    <h1>{title}</h1>
                </div>
            </div>
        </li>
    )
}

export default SingleRecipe;