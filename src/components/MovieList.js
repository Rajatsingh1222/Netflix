import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,Movies}) => {
    console.log(Movies)
  return (

    <div className= ' mt-4 ml-12  '>
        <div className='text-white'>
            {title}
        </div >
        <div className='flex overflow-x-scroll   p-8 overflow-y-hidden'>
         <div className='flex
         '>

        {Movies?.map((movie)=>(movie?<MovieCard path={movie.poster_path}/>:movie[0]))}
         </div>
        </div>
        </div>
  )
}

export default MovieList