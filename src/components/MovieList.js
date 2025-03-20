import React from 'react'
import MovieCard from './MovieCard'
import { useParams, Link } from "react-router-dom";


const MovieList = ({title,Movies}) => {
    // console.log(Movies)
  return (

    <div className= ' mt-4 ml-12  '>
        <div className='text-white'>
            {title}
        </div >
        <div className='flex overflow-x-scroll   p-8 overflow-y-hidden'>
         <div className='flex
          '>

        {   Movies?.map((movie)=>(<Link to={"moviePage/"+movie.id}><MovieCard path={movie.poster_path}/></Link>))}
         </div>
        </div>
        </div>
  )
}

export default MovieList;