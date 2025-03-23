import React from 'react'

const MovieCard = ({path}) => {
  // console.log(path);
    return (
    <div className='  flex ml-1 md:ml-2  w-20 h-30 border border-violet-50 hover:scale-110 overflow-visible transition-all duration-200 rounded-md object-fill md:w-40 md:h-60'>
   {path ?<img className='rounded-md' alt="img" src={"https://image.tmdb.org/t/p/w780/"+path+".jpg"}/>:<img className='rounded-md' alt="img" src={"https://image.tmdb.org/t/p/w780/xWWg47tTfparvjK0WJNX4xL8lW2.jpg"}/>}
    </div>
  )
}

export default MovieCard;