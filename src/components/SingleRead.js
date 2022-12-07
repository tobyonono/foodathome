import React from 'react';
import testImg from '../images/OnePot.jpg';
import '../Read.css';

const SingleRead = ({ id, name, author, image, type, twitter, instagram }) => {
    console.log(image);

    return (
        <li className='readCard' key={id} id={id}>
            
                <div className="readImage">
                    <img src={image} alt="read" />
                </div>
                <div className='info'>
                    <h3 className="category">{author}</h3>
                    <h1 className="recipeTitle">{name}</h1>                   
                    <div className="bottom">
                        <h5 className="author">{type}</h5>
                    </div>
                </div>                    
        </li>
    )
    
}

export default SingleRead;