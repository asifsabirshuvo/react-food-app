import React, { useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { async } from 'q';
import Recipe from './recipe';

const App = () => {

const APP_ID = '43992b09';
const APP_KEY = '531078582b665814fe2db1641c992cec';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('beef');
  const [show, setShow] = useState(true);

  useEffect(() => {
    getRecipes();
  }, [query]);
    
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    setShow(false);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setShow(true)

    setSearch('');
  }

  return (
    <div className="App">
      <br/>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text"
          value={search} onChange={updateSearch}></input>
        <button className="search-button" type="submit">
        search
        </button>
      </form>

      {show == true ? (
          <div className="loader-div"></div>
      ) : null}

      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
        </div>
    </div>
  );
}

export default App;
