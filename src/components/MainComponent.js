import React from 'react'
import MainMovie from './MainMovie';
import MainVideo from './MainVideo';
import { useSelector } from 'react-redux';

const MainComponent = () => {
const movies=useSelector(store=>store.movies?.nowPlayingMovies)
if(!movies)return;
const mainMovie=movies[0];
const {original_title,overview,id}=mainMovie;
console.log(mainMovie);
  return (
    <div>
    <MainMovie title={original_title} overview={overview}/>
    <MainVideo movieId={id}/>
    </div>
  )
}

export default MainComponent;