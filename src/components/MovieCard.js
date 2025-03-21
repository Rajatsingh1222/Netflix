import React from 'react'
// import { useParams, Link } from "react-router-dom";

const MovieCard = ({path}) => {
  // console.log(path);
    return (
    <div className='  flex ml-2  w-40 h-60 border border-violet-50 hover:scale-110 overflow-visible transition-all duration-200 rounded-md object-fill'>
   {path ?<img className='rounded-md' alt="img" src={"https://image.tmdb.org/t/p/w780/"+path+".jpg"}/>:<img className='rounded-md' alt="img" src={"https://image.tmdb.org/t/p/w780/xWWg47tTfparvjK0WJNX4xL8lW2.jpg"}/>}
    </div>
  )
}

export default MovieCard;