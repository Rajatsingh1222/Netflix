import React from 'react'

const CastCard = ({name,link}) => {
    console.log(name);
  return (
    <>
        
        <div className=' w-24 h-32 md:w-44 md:h-72 m-1 bg-black p-1'>

    <img className=' border h-36 w-28 md:w-44 md:h-60 border-white hover:scale-110 transition-all duration-300 ' alt="img" src={"https://image.tmdb.org/t/p/w780/"+link}/>
    <div className='mt-3'>{name}</div>
        </div>
    </>

)
}

export default CastCard;