import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const Footer = () => {
    const movies=useSelector(store=>store.movies)
    console.log(movies)
  return (
    <div className=' bg-black mt-12 pb-12 '>
        
      <div className='mt-[-310px] relative z-20'>

        <MovieList  title={"Now Playing Movies"} Movies={movies.nowPlayingMovies} />
        <MovieList  title={"Popular Movies"} Movies={movies.popularMovies} />
        
        </div>
        
       
    </div>
  )
}

export default Footer;