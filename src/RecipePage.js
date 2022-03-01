import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import axios from "axios";
import { useParams } from 'react-router-dom';
import SectionTitle from './components/SectionTitle';
import RecipeInstructions from './components/RecipeInstructions';
import RecipeIngredients from './components/RecipeIngredients.js';
import './RecipePage.css';




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
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
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
            <div> here dispolay a gif loading </div>
        )
    };

    return (

        <div className='recipePageBody'>
            <header className="topBar">
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
                        <h3>{name}</h3>
                        <div className="recipeImage">
                            <img src={thumbnail_url} alt="recipe" />
                        </div>
                    </div>
                    <section>
                        <p>Serves {data.num_servings} </p>
                        <p>Prep Time {data.num_servings} </p>
                    </section>
                    <section>
                        <h4>Ingredients</h4>
                        {sections && <RecipeIngredients ingredients={sections} />}

                    </section>
                    <div>{country}</div>
                    <div>{slug}</div>
                    <section>
                        <h4>Directions</h4>
                        {instructions && <RecipeInstructions instructions={instructions} />}
                    </section>

                </div>
                <div className='moreAndPlaylist'></div>
            </div>




        </div>
    )

}

export default RecipePage;
