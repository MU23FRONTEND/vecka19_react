import { useState, useEffect, FormEvent } from 'react';
import './App.css';
import SearchForm from './components/searchForm/SearchForm';
import JokeList from './components/jokeList/JokeList';
import axios from 'axios';
import JokeType from './models/Joke';

function App() {
  const [jokes, setJokes] = useState<JokeType[]>([]);
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('Any');

  useEffect(() => {
    axios.get(`https://v2.jokeapi.dev/joke/${category}?blacklistFlags=religious,racist,sexist&type=single&contains=${input}&amount=10`)    
      .then(response => {
        setJokes(response.data.jokes);
      })
  }, [input, category]);

  useEffect(() => {
    console.log(jokes);
  }, [jokes]);

  const handleInputChange = (event : FormEvent) => {
    setInput((event.target as HTMLInputElement).value);
  }

  const handleCategoryChange = (event : FormEvent) => {
    setCategory((event.target as HTMLSelectElement).value);
  }

  return (
    <div className="app">
      <SearchForm 
        handleInputChange={ handleInputChange }
        handleCategoryChange={ handleCategoryChange }
      />
      <JokeList jokes={ jokes } />
    </div>
  )
}

export default App
