import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import SectionTitle from './components/SectionTitle';
import RecipeList from './components/RecipeList';
import SubmitButton from './components/SubmitButton';
import RecipePage from './RecipePage';
import { Link } from "react-router-dom";






const Home = () => {
    const [recipeData, setRecipeData] = useState(null);
    const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(true);

    function onIngredientChange(newIngredients) {
        setIngredients(newIngredients);
    }

    async function getRecipes() {

        const encodedIngredients = encodeURI(ingredients);


        const options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            params: { from: '0', size: '30', q: encodedIngredients },
            headers: {
                'x-rapidapi-host': 'tasty.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
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
        <>
            <header className="topBar">
                <Link to={`/`} className='normal'>
                    <div className='title'>
                        <SectionTitle titleText="Bitter Cassava" />
                        <SectionTitle titleText="Cooking Club" />
                    </div>
                </Link>
                <ReactTagInput tags={ingredients}
                    onChange={onIngredientChange} placeholder="Enter Something Food Related" />
            </header>
            <button onClick={getRecipes}>Submit</button>

            <div className="cardWrapper">
                {recipeData && <RecipeList recipes={recipeData} />}
            </div>
        </>


    )
}

export default Home;
