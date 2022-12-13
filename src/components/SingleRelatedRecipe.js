import React from 'react';
import '../Sidebar.css';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const SingleRelatedRecipe = ({ id, title, image, author }) => {


    return (
        <li key={id} id={id}>
            <div className=" flex py-8 border-b border-[rgba(0,0,0,.1)]">
                <div className='flex-grow pr-4'>
                    <h5></h5>
                    <Link to={`/recipes/${id}/${title}`} >
                        <h4 className='sideBarRecipeTitle'><strong>{title} Recipe</strong></h4>
                    </Link>
                    <p className="category">{author}</p>
                    <p className="category">23-12-99</p>
                </div>
                <div className="max-w-[70px]">
                    <img className='aspect-square object-cover' src={image} alt="recipe" />
                </div>
            </div>
        </li >
    )
}

export default SingleRelatedRecipe;

