import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import RecipePage from './RecipePage';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';








function App() {

  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='recipes/:id/:recipeSlug' element={<RecipePage />} />
        </Routes>
      </Router>


    </div>


  );
}

export default App;
