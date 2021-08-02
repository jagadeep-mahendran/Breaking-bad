import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/Search';

const App = () =>  {

  const [characters , setCharacter] = useState([]);
  const [isLoading , setIsLoading] = useState(true);
  const [query , setQuery] = useState('');

  useEffect(()=>{
   const fetch = async() => {
    const result = await axios (`https://www.breakingbadapi.com/api/characters?name=${query}`);
    
    console.log(result.data);
    setCharacter(result.data);
    setIsLoading(false);
   } 
   fetch();
  }, [query]);

  const queryFunction = (q) =>{
    setQuery(q)
  }

  return (
    <div className="container">
      <Header />
      <Search getSearchCharacter = {queryFunction}/>
      <CharacterGrid characters={characters} isLoading={isLoading}/>
    </div>
  );
}

export default App;
