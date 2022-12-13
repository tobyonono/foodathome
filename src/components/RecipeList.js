import React from 'react';
import SingleRecipe2 from './SingleRecipe2';
import '../Recipe.css';

const RecipeList = ({ recipes }) => {
    //const [id, title, image, missedIngredients] = recipes;
    const recipeCard = recipes.map((recipe, i) => {
        return <SingleRecipe2 key={i} id={i} title={recipe.name} image={recipe.thumbnail_url}
            recipeDescription={recipe.description} author={recipe.show.name} />
    });


    return (
        <div>
            <ul className='grid gird-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-20 lg:p-4'>
                {recipeCard}
            </ul>
        </div>
    )
}

export default RecipeList;