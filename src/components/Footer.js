import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const Footer = () => {
    const movies=useSelector(store=>store.movies)
    console.log(movies)
  return (
    <div className=' bg-black mt-12 pb-12 '>
        
      <div className='mt-[-310px] relative z-20'>
 
        <MovieList  title={"Now Playing "} Movies={movies.nowPlayingMovies} />
        <MovieList  title={"Top Rated"} Movies={movies.topRatedMovies} />
        <MovieList  title={"Upcoming"} Movies={movies.upcomingMovies} />
        <MovieList  title={"Popular"} Movies={movies.popularMovies} />
        
        </div>
        
       
    </div>
  )
}

export default Footer;