import React from 'react'
// import { useParams, Link } from "react-router-dom";

const MovieCard = ({path}) => {
  // console.log(path);
    return (
    <div className='  flex ml-7  w-40 h-60 border border-violet-600  hover:scale-125 overflow-visible transition-all duration-300 rounded-md object-fill'>
   {path ?<img className='rounded-md' alt="img" src={"https://image.tmdb.org/t/p/w780/"+path+".jpg"}/>:<img className='rounded-md' alt="img" src={"https://image.tmdb.org/t/p/w780/xWWg47tTfparvjK0WJNX4xL8lW2.jpg"}/>}
    </div>
  )
}

export default MovieCard;