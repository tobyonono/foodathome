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






function App() {

  const [recipeID, setRecipeID] = useState(null);

  


  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<Home setRecipeID={setRecipeID} />} />
          <Route path='recipes/:recipeSlug' element={<RecipePage recipeID={recipeID}  />} />

        </Routes>
      </Router>


    </div>


  );
}

export default App;
