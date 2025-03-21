import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { options } from '../utils/constants';
import MainMovie from './MainMovie';

const MoviePage = () => {
   const [details,SetDetails]=useState({})
   const [cast,SetCast]=useState([])
   const {id}=useParams();
    const getDetails=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/'+id+'?language=en-US',options);
    const json= await data.json();
    console.log(json);
    SetDetails(json);
    }
    const {genres}=details;
    const getCast=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/'+id+'/credits?language=en-US', options)
      const json=  await data.json();
      SetCast(json.cast);
    }
    useEffect(()=>{
       getDetails();
       getCast();
    },[])
    console.log(cast)
    const actors=cast.filter(el=>el.known_for_department=="Acting")
    console.log(cast)
  return (
    <>
    
    {/* <h1 className=' text-white bg-gradient-to-r from-black '>{details.original_title}</h1> */}
    <div className='absolute bg-black w-screen h-screen opacity-85 overflow-y-scroll' >
        <h1 className=' text-white  text-4xl m-10'>{details.original_title}</h1>
        <img className=' text-white  text-4xl  mt-6  w-40 h-60 border border-white p-2 m-10' alt="img" src={"https://image.tmdb.org/t/p/w780/"+details.poster_path+".jpg"}/>
          <h1 className='text-white ml-10 text-2xl'>Description</h1>  
        <p className=' text-white z-20 text-md  w-1/2 mx-10 m-2'>{details.overview}</p>
        <div className='flex px-12 text-white mt-12 font-bold'>Genres-

        {genres?.map((g)=><div className='text-red-700 mx-1 '>{g.name+","}</div>)}
        </div>
        <div className='text-white mx-12 mt-4 flex font-bold'>Rating-<div className='text-red-600'>{details.vote_average}/10</div></div>
          <div className='text-white ml-12 mt-12 font-bold text-3xl'>Cast</div>
        <div className='overflow-x-scroll'>
          <div className='box   h-44 ml-12 mt-10 flex mb-12 text-white p-2'>
          {cast.map((el)=>el.profile_path &&<img className='m-2 border border-white hover:scale-105 transition-all duration-300' alt="img" src={"https://image.tmdb.org/t/p/w780/"+el.profile_path}/>)}
          </div>

        </div>
    </div>
        
        
     <div>
    <img className='w-screen h-screen' src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg"   alt='logo'/>
     </div>

    </>
  )
}

export default MoviePage;
