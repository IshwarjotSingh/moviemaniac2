import React from 'react'
import './app.css';
import Fire from './assets/fire.png'
import Star from './assets/glowing-star.png';

import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <MovieList type="popular" title="Popular" emoji={Fire} />
      <MovieList type="top_rated" title="Top Rated" emoji={Star} />
     


    </div>
  )
}

export default App
