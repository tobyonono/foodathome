import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import SingleRelatedRecipe from './SingleRelatedRecipe';
import '../Sidebar.css';
import {Loader} from '../icons/svg/svgs.js';



const RelatedRecipes = ({ recipeID }) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list-similarities',
        params: { recipe_id: recipeID },
        headers: {
            'x-rapidapi-host': 'tasty.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY2
        }
    };

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
            const similarRecipes = await axios.request(options);
            setData(similarRecipes.data.results);
            setIsLoading(false);

            console.log('Similar Receipes', similarRecipes.data.results);
            console.log(data);
        }
        fetchData().catch(console.error);
    }, []);

    if (isLoading) {
        return (
            <div> <Loader /></div> 
        )
    };

    const relatedRecipeList = data.map((recipe, i) => {
        return <SingleRelatedRecipe key={recipe.id} id={recipe.id} title={recipe.name} image={recipe.thumbnail_url}
            author={recipe.show.name} />
    })



    return (
        <div>
            <ul className='sideBarRecipe'>
                <div className='sideBarTitle'>
                    <div className='playlistHeader'>
                        <h2 >ENJOY</h2>
                        <h2>A PLAYLIST</h2>
                    </div>

                    <iframe style={{ 'border-radius': '12px' }} src="https://open.spotify.com/embed/playlist/6zvCa9tlYGdJWPhz9Ruzpk?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                    </iframe>
                </div>

                <div className='sideBarTitle'>
                    <h2 >MORE</h2>
                    <h2>LIKE THIS</h2>
                </div>
                {relatedRecipeList}
            </ul>
        </div>
    )


}

export default RelatedRecipes;