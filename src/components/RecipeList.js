import React from 'react';
import SingleRecipe2 from './SingleRecipe2';
import '../Recipe.css';

const RecipeList = ({ recipes }) => {
    //const [id, title, image, missedIngredients] = recipes;
    const recipeCard = recipes.map((recipe, i) => {
        return <SingleRecipe2 key={recipe.id} id={recipe.id} title={recipe.name} image={recipe.thumbnail_url}
            recipeDescription={recipe.description} author={recipe.show.name} />
    });


    return (
        <div>
            <ul className='grid grid-cols-3 gap-4 p-4'>
                {recipeCard}
            </ul>
        </div>
    )
}

export default RecipeList;