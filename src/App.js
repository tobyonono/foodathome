import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import SectionTitle from './SectionTitle';
import RecipeList from './RecipeList';
import SubmitButton from './SubmitButton';




function App() {
  const [recipeData, setRecipeData] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  function onIngredientChange(newIngredients) {
    setIngredients(newIngredients);
  }

  async function getRecipes() {

    const encodedIngredients = encodeURI(ingredients);
    const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients?apiKey=a86514be38c1456eaad9120f13738be6',
      {
        params: { ingredients: encodedIngredients, number: 9 }
      }).catch(error => {
        console.error(error);
      });

    setRecipeData(response.data);
    console.log(recipeData);


  }

  async function getRecipeInstructions() {

  }





  return (
    <div className="App">
      <header className="topBar">
        <ReactTagInput tags={ingredients}
          onChange={onIngredientChange} />
        <SubmitButton />
      </header>
      <button onClick={getRecipes}>Submit</button>
      <div className='title'>
        <SectionTitle titleText="Meals" />
        <SectionTitle titleText="For You" />
      </div>

      <div className="CardWrapper">
        {recipeData && <RecipeList recipes={recipeData} />}
      </div>
    </div>
  );
}

export default App;
