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
import { StaticReadingList, staticVideoList } from './components/StaticReadingList';
import { Link } from "react-router-dom";
import { Search } from './icons/svg/svgs.js';
import { Search2 } from './icons/svg/svgs.js';
import { Loader } from './icons/svg/svgs.js';
import SearchBar from './components/SearchBar';
import DictionaryDefinition from './components/Dictionary/DictionaryDefinition';
const searchTermExamples =['nutmeg', 'braise','cassava', 'ginger', 'mango', 'cardamom', 'roast', 'flour','skillet', 'yam', 'fry', 'carve', 'deseed'];
const randomSearch = searchTermExamples[Math.floor(Math.random()*searchTermExamples.length)];


const Home = ({ data, setData, ingredients, setIngredients, setDictionarySearch, dictionarySearch }) => {

    const [loading, setLoading] = useState(true);
    

    
        //const randomSearch = searchTermExamples[Math.floor(Math.random()*searchTermExamples.length)];
        //console.log(randomSearch);


    return (
        <>
            <header className="topBar font-nitti">
                <Link to={`/`} className='normal'>
                    <div className='title'>
                        <SectionTitle titleText="Bitter Cassava" />
                        <SectionTitle titleText="Cooking Club" />
                    </div>
                </Link>

                <SearchBar ingredients={ingredients} setIngredients={setIngredients} setData={setData} setDictionarySearch={setDictionarySearch} />
            </header>
            <section className='pt-8 p-4 border-0 mx-10'>
            <DictionaryDefinition dictionarySearch={randomSearch} />
                <hr className='w-full my-4' />
            </section>
            

            
            <section className='pt-8 py-4 border-0 mx-10'>
                <div className="flex p-4">
                    <span className="text-white font-nitti text-4xl uppercase">Featured Reading</span>
                </div>
                <ReadingList staticList={StaticReadingList} />
                <hr className='w-full m-4' />
            </section>
            <section className='pt-8 py-4 border-0 mx-10'>
                <div className="flex p-4">
                    <span className="text-white font-nitti text-4xl uppercase">Featured Video</span>
                </div>
                <ReadingList staticList={staticVideoList} />
                <hr className='w-full m-4' />
            </section>
        </>

    )
}

export default Home;
