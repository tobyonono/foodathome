import React from 'react';
import './Recipe.css';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const SingleRecipe = ({ id, title, image, recipeDescription, author}) => {


    return (
        <li className='recipeCard' key={id} id={id}>
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
                        <Link to={`recipes/${id}/${title}`} >
                            <h5 className="getMore">Full Recipe → </h5>
                        </Link>

                    </div>
                </div>
            </div>
        </li>
    )
}

export default SingleRecipe;

