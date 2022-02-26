import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import axios from "axios";
import {useParams} from 'react-router-dom';
import SectionTitle from './SectionTitle';



const RecipePage = ({ recipeID }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const params = useParams();
    const recipeSlug = params.recipeSlug;

    useEffect(() => {

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

    }, [recipeID]);

   const {name, country, slug} = data;
   

    
    

    return (
        /*
        <>
            {!isLoading && (
                <>
                    <div className="contentWrapper">
                        <div className='recipeInfo'>
                            <h3 className="category">Food</h3>
                            <h1 className="recipeTitle">{title}</h1>
                            <p className="recipeDescription">{recipeDescription}</p>
                            <div className="bottom">
                                <h5 className="author">{author} • 23-12-99</h5>
                                <a href="#" className="getMore"><h5 >Full Recipe → </h5></a>
                            </div>
                        </div>
                    </div>
                </>)}
        </>
        */
       <>
       <header className="topBar">
                <Link to={`/`} className='normal'>
                    <div className='title'>
                        <SectionTitle titleText="Bitter Cassava" />
                        <SectionTitle titleText="Cooking Club" />
                    </div>
                </Link>
            </header>
       <div>{name}</div>
       <div>{country}</div>
       <div>{slug}</div>
       <div>slug: {recipeSlug}</div></>
       )

}

export default RecipePage;
