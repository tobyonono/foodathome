import React from 'react';
import '../Sidebar.css';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const SingleRelatedRecipe = ({ id, title, image, author }) => {


    return (
        <li key={id} id={id}>
            <div className="sideBarWrapper">
                <div className='recipeContent'>
                    <h5></h5>
                    <Link to={`/recipes/${id}/${title}`} >
                        <h4 className='sideBarRecipeTitle'><strong>{title} Recipe</strong></h4>
                    </Link>
                    <p className="category">{author}</p>
                    <p className="category">23-12-99</p>
                </div>
                <div className="sideBarImage">
                    <img src={image} alt="recipe" />
                </div>
            </div>
        </li >
    )
}

export default SingleRelatedRecipe;

