import React from 'react'
import MovieCard from './MovieCard'
import { useParams, Link } from "react-router-dom";


const MovieList = ({title,Movies}) => {
    // console.log(Movies)
  return (

    <div className= ' mt-4  md-4 md:ml-12  '>
        <div className='text-white ml-6'>
            {title}
        </div >
        <div className='flex overflow-x-scroll   px-6 py-3 md:p-8 overflow-y-hidden'>
         <div className='flex'>

        {   Movies?.map((movie)=>(<Link to={"moviePage/"+movie.id}><MovieCard path={movie.poster_path}/></Link>))}
         </div>
        </div>
        </div>
  )
}

export default MovieList;