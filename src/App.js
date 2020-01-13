import React,{ useEffect,useState } from 'react';
import logo from './logo.svg';
import Recipe from './Recipe'
import './App.css';

function App() {
  
  const APP_ID ='078b602d';
  const APP_KEY ='34aeda96b0871ea917c9821ea44f36ad';
  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState();
  const [query,setQuery]=useState('chicken');

  useEffect(() => { getRecipes();},[query]);
  const updateSearch =e => {
    setSearch(e.target.value);
  }
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const getRecipes= async ()=>{
    const response =await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data =await response.json();
    setRecipes(data.hits);
    console.log(data);
  }


  return (
    <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input 
          type="text" 
          className="search-bar"
          value={search}
          onChange={updateSearch} 
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        <div className="container">
                {recipes.map(recipe => (
                  <Recipe 
                  key={recipe.recipe.label}
                  title={recipe.recipe.label}
                  calories={recipe.recipe.calories}
                  img={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients}
                  serves={recipe.recipe.yield}
                  type={recipe.recipe.source}
                  weight={recipe.recipe.totalWeight}
                  caution={recipe.recipe.cautions}
                  />

                ))}
                </div>
        </div>
  );
}

export default App;
