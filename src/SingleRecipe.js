import React from 'react';
import './Recipe.css';

const SingleRecipe = ({ id, title, image, recipeDescription, author }) => {
    return (
        <li className='recipeCard'>
            <div className="contentWrapper">
                <div className="image">
                    <img src={image} alt="recipe" />
                </div>
                <div className='recipeInfo'>
                    <h3 className="category">Food</h3>
                    <h1 className="recipeTitle">{title}</h1>
                    <p className="recipeDescription">{recipeDescription}</p>
                    <div className="bottom">
                        <h5 className="author">{author} • 23-12-99</h5>
                        <a href="#" className="getMore"><h5 >Full Recipe → </h5></a>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default SingleRecipe;

