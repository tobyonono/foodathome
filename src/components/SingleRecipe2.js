import React from 'react';
import '../Recipe.css';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const SingleRecipe = ({ id, title, image, recipeDescription, author }) => (

    <article className="w-full p-3 border font-nitti text-sm uppercase shadow-lg rounded-lg bg-[bisque] hover:bg-[#ffe4c4d3]" key={id}>
        <div className="relative p-2 pb-4 border border-[bisque] bg-black h-full">
            <div className="hover:brightness-50 cursor-pointer">
                <img className='aspect-square object-cover' src={image} />
            </div>
            <div className="flex flex-wrap justify-between my-3">
                <span>{author}</span>
                <span>Dublin</span>
                <div className="basis-full text-left mt-3 text-lg font-bold">
                    <h1 className='text-[bisque]'>{title}</h1>
                </div>
                <div className="flex flex-row py-4">
                    <p className="text-left normal-case line-clamp-3 font-spaceGrotesk">{recipeDescription ? recipeDescription : 'Click on "Full Recipe" to try a delicious recipe from our Tasty curators. No description from the API so you have this twaddle instead.'}</p>
                </div>
                <Link to={`recipes/${title}/${id}`} >
                    <h5 className="text-xs">Full Recipe → </h5>
                </Link>
            </div>
        </div>
    </article>
)


/* <Link to={`recipes/${title}/${id}`} >
                            <h5 className="getMore">Full Recipe → </h5>
                        </Link>
*/
export default SingleRecipe;

