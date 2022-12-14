import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import RecipePage from './RecipePage';
import RecipePage2 from './pages/RecipePage2';
import RecipeResultsPage from './components/RecipeResultsPage';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [dictionarySearch, setDictionarySearch] = useState(null);

  
  return (
    <div className="App">     
      <Router>
        <Routes>
          <Route path='/' element={<Home data={data} setData={setData} ingredients={ingredients} setIngredients={setIngredients} setDictionarySearch={setDictionarySearch} dictionarySearch={dictionarySearch}/>} />
          <Route exact path='/search/:ingredients/recipes/:recipeSlug/:id' element={<RecipePage2 data={data} />} />
          <Route exact path='/search/:ingredients' element={<RecipeResultsPage data={data} setData={setData} ingredients={ingredients} setIngredients={setIngredients} dictionarySearch={dictionarySearch} setDictionarySearch={setDictionarySearch}/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
