import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const Footer = () => {
    const movies=useSelector(store=>store.movies)
    console.log(movies)
  return (
    <div className=' bg-black  pb-6 md:pb-12 '>
        
      <div className='mt-[-18px] md:mt-[-310px] ml-[2px] md:ml-[-20px] relative z-20'>
 
        <MovieList  title={"Now Playing "} Movies={movies.nowPlayingMovies} />
        <MovieList  title={"Top Rated"} Movies={movies.topRatedMovies} />
        <MovieList  title={"Upcoming"} Movies={movies.upcomingMovies} />
        <MovieList  title={"Popular"} Movies={movies.popularMovies} />
        
        </div>
        
       
    </div>
  )
}

export default Footer;