import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import axios from "axios";
import { useParams } from 'react-router-dom';
import ShareSocials from './components/ShareSocials';
import SectionTitle from './components/SectionTitle';
import RecipeInstructions from './components/RecipeInstructions';
import RecipeIngredients from './components/RecipeIngredients.js';
import RelatedRecipes from './components/RelatedRecipes.js';
import './RecipePage.css';
import {Loader} from './icons/svg/svgs.js';





const RecipePage = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const params = useParams();
    const recipeSlug = params.recipeSlug;
    const recipeID = params.id;

    useEffect(() => {
        setIsLoading(true);
        const options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/detail',
            params: { id: recipeID },
            headers: {
                'x-rapidapi-host': 'tasty.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY2
            }
        };

        const fetchData = async () => {
            const recipeInstructions = await axios.request(options);
            setData(recipeInstructions.data);
            console.log(recipeInstructions.data);
            console.log(data);
        }
        fetchData().catch(console.error);
        setIsLoading(false);

    }, []);

    const { name, country, slug, instructions, thumbnail_url, sections } = data;

    console.log(data.instructions);
    console.log(name);

    if (isLoading) {
        return (
            <div> <Loader /></div>
        )
    };

    return (

        <div className='recipePageBody'>
            <header className="topBar recipePageHeader">
                <Link to={`/`} className='normal'>
                    <div className='title'>
                        <SectionTitle titleText="Bitter Cassava" />
                        <SectionTitle titleText="Cooking Club" />
                    </div>
                </Link>
            </header>
            <div className='recipePageContentGrid'>
                <div className='ingredientsAndInstructions'>
                    <div>
                        <h1 className="recipePageTitle">{name}</h1>
                        <ShareSocials />
                        <div className="recipePageImage">
                            <img src={thumbnail_url} alt="recipe" />
                        </div>
                    </div>
                    <section>
                        {data.num_servings && <p><strong><i>Serves:</i></strong> {data.num_servings} </p>}
                        {data.prep_time_minutes &&<p><strong><i>Prep Time:</i></strong> {data.prep_time_minutes} minutes </p>}
                        {data.cook_time_minutes &&<p><strong><i>Cooking Time:</i></strong> {data.cook_time_minutes} minutes </p>}

                    </section>
                    <section>
                        <h4 className="uppercase">Ingredients</h4>
                        {sections && <RecipeIngredients ingredients={sections} />}

                    </section>
                    <section>
                        <h4 className="uppercase">Directions</h4>
                        {instructions && <RecipeInstructions instructions={instructions} />}
                    </section>

                </div>
                <div className='moreAndPlaylist'>
                    <RelatedRecipes recipeID={recipeID}></RelatedRecipes>
                </div>
            </div>




        </div>
    )

}

export default RecipePage;
