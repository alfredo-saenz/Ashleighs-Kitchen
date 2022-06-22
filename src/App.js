import { useEffect, useState } from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import './App.css';

function App() {
const [search, setSearch] = useState('');
const [recipes, setRecipes] = useState([]);
const searchOptions = {
	key: process.env.REACT_APP_EDAMAM_KEY,
  limit:25,
  api:'https://api.edamam.com',
  endpoint: '/search',
  appID: '6a8184b2'
};
function getRecipes(search) {
  const url = `${searchOptions.api}${searchOptions.endpoint}?q=${search}&app_id=${searchOptions.appID}&app_key=${searchOptions.key}`;

  fetch(url)
  .then((res) => res.json())
  .then((res) => {
    setRecipes(res.hits)
    console.log(res)
  })
  .catch(console.error)
}
function handleChange(event) {
  event.preventDefault();
  setSearch(event.target.value)
}
function handleSubmit(event) {
  event.preventDefault()
  console.log(event.target)
  getRecipes(search);
}
useEffect(() => {
  // getRecipes(search);
}, [])

  return (
    <div>
      <SearchForm handleChange={handleChange} handleSubmit={handleSubmit} search={search}/>
      <SearchResults recipes={recipes}/>
    </div>
  );
}

export default App;
