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
    
    /*const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients?apiKey=a86514be38c1456eaad9120f13738be6',
      {
        params: { ingredients: encodedIngredients, number: 9 }
      }).catch(error => {
        console.error(error);
      });

    setRecipeData(response.data);
  */

    const options = {
      method: 'GET',
      url: 'https://tasty.p.rapidapi.com/recipes/list',
      params: {from: '0', size: '30', q: encodedIngredients},
      headers: {
        'x-rapidapi-host': 'tasty.p.rapidapi.com',
        'x-rapidapi-key': '59d95a67b7mshe28714ca6a4a57fp18e490jsna77fcc183e2b'
      }
    };

    const apiData = await axios.request(options).catch(error => {
      console.error(error);
    });
    
    console.log(apiData.data.results);
    setRecipeData(apiData.data.results);
    


  }

  async function getRecipeInstructions() {

  }





  return (
    <div className="App">
      <header className="topBar">
        <ReactTagInput tags={ingredients}
          onChange={onIngredientChange}>
            
          </ReactTagInput>
          <SubmitButton />
        
      </header>
      <button onClick={getRecipes}>Submit</button>
      <div className='title'>
        <SectionTitle titleText="Meals" />
        <SectionTitle titleText="For You" />
        <hr />
      </div>

      <div className="cardWrapper">
        {recipeData && <RecipeList recipes={recipeData} />}
      </div>
    </div>
  );
}

export default App;
