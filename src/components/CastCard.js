import React from 'react'

const CastCard = ({name,link}) => {
    console.log(name);
  return (
    <>
        
        <div className=' w-44 h-72 m-2 bg-black p-1'>

    <img className=' border h-56 w-44 border-white hover:scale-110 transition-all duration-300 ' alt="img" src={"https://image.tmdb.org/t/p/w780/"+link}/>
    <div className='mt-3'>{name}</div>
        </div>
    </>

)
}

export default CastCard;