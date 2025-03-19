import React from 'react'

const MainMovie = ({overview,title}) => {
  return (
    <div className=' pt-[220px] px-12 absolute text-white bg-gradient-to-r from-black h-screen'>

    <h1 className='text-5xl'>{title}</h1>
    <p className='w-1/3 mt-3'>{overview}</p>
    <div className='mt-12'>
        <button className='bg-white text-black text-lg w-36 p-2 font-bold rounded-md hover:bg-opacity-80'>▶ play</button>
        <button className='bg-gray-500 text-white text-lg w-36 p-2 font-bold rounded-md ml-3 hover:bg-opacity-80'>More Info</button>
    </div>
    </div>
    
  )
}

export default MainMovie;