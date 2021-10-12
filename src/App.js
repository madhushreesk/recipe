import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";
import './App.css';

const App = () => {

  const APP_ID = "f709f755";
  const APP_KEY = "785db063f095be63f86696a16ff473dd";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const example = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    console.log("i am calling the API");
    getData();
  },[query])

  const getData = async () => {
    const responce = await fetch(example);
    const data = await responce.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    console.log(e.target.value);
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className = "App">
      <form onSubmit = {getSearch} className = "search-form">
        <input className = "search-bar" onChange = {updateSearch} type = "text"/>
        <button className = "search-button" type = "submit">
          search 
        </button>
      </form>
      <div className = "recipes">
      {recipes.map(data => (
        <Recipe 
        Label = {data.recipe.label}
        image = {data.recipe.image}
        Calorie = {data.recipe.calories}  
        ingredients = {data.recipe.ingredients}
        />

      ))}
      </div>
      
    </div>

  );
}

export default App;
