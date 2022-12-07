import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import SectionTitle from './components/SectionTitle';
import RecipeList from './components/RecipeList';
import SubmitButton from './components/SubmitButton';
import RecipePage from './RecipePage';
import ReadingList from './components/ReadingList';
import { Link } from "react-router-dom";
import { Search } from './icons/svg/svgs.js';
import { Search2 } from './icons/svg/svgs.js';
import { Loader } from './icons/svg/svgs.js';



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
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY2
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
                    onChange={onIngredientChange} placeholder="Search Something" />
                <button className='searchButton hover-search-submit' onClick={getRecipes}><Search2 /></button>
            </header>
            <section className='p-20 pb-0 mb-0 border-0'>
                <div className="flex p-4">
                    <span className="text-white font-nitti text-4xl uppercase">Featured Reading</span>
                </div>
                <ReadingList />
                <hr className='w-full'/>
            </section>
            
            <section className='p-20 pb-0 mb-0 border-0'>
                <div className="flex p-4">
                    {recipeData && <span className="text-white font-nitti text-4xl uppercase">Recipes</span>}
                </div>
                <div>
                    {recipeData && <RecipeList recipes={recipeData} />}
                </div>

            </section>
        </>

    )
}

export default Home;
