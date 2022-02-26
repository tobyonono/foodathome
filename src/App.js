import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import SectionTitle from './SectionTitle';
import RecipeList from './RecipeList';
import SubmitButton from './SubmitButton';
import RecipePage from './RecipePage';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom';







function App() {

  const [test, setRecipeID] = useState(null);
  const params = useParams();
  const recipeID = params.ID;

  console.log(recipeID, params, 'params');

  


  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<Home setRecipeID={setRecipeID} />} />
          <Route path='recipes/:id/:recipeSlug' element={<RecipePage />} />

        </Routes>
      </Router>


    </div>


  );
}

export default App;
