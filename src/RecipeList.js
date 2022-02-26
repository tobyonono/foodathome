import React from 'react';
import SingleRecipe from './SingleRecipe';
import './Recipe.css';

const RecipeList = ({recipes,setRecipeID}) => {
    //const [id, title, image, missedIngredients] = recipes;
    const recipeCard = recipes.map((recipe, i) =>{
        return <SingleRecipe key={recipe.id} id ={recipe.id} title={recipe.name} image={recipe.thumbnail_url} 
        recipeDescription={recipe.description} author={recipe.show.name} setRecipeID={setRecipeID}  />
    });
   

    return(
        <ul className="recipeList">
           {recipeCard}   
        </ul>
    )

}

export default RecipeList;