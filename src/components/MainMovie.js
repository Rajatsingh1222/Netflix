import React from 'react'

const MainMovie = ({overview,title}) => {
  return (
    <div className=' md:pt-[90px] md :pt-[220px]  px-6 pt-36 md:px-12 absolute  text-white bg-gradient-to-r from-black h-screen'>

    <h1 className='text-lg md:text-4xl md:mt-20'>{title}</h1>
    <p className=' w-2/3 md:w-1/3 mt-3 md:mt-8 text-xs md:text-xl'>{overview}</p>
    <div className='mt-6 md:mt-8'>
        <button className='bg-white text-black md:text-lg  w-20 h-8 md:w-36 md:h-12 md:p-2 md:font-bold rounded-md hover:bg-opacity-80 text-xs'>▶ play</button>
        <button className='bg-gray-500 text-white text:sm md:text-lg w-20 h-8 md:w-36 md:h-12 md:p-2 md:font-bold rounded-md ml-1 md:ml-3  hover:bg-opacity-80 text-xs'>More Info</button>
    </div>
    </div>
    
  )
}

export default MainMovie;