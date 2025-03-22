import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { options } from '../utils/constants';
import MainMovie from './MainMovie';
import CastCard from './CastCard';

const MoviePage = () => {
   const [details,SetDetails]=useState({})
   const [cast,SetCast]=useState([])
   const [date,SetDate]=useState("")
   const {id}=useParams();
    const getDetails=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/'+id+'?language=en-US',options);
    const json= await data.json();
    console.log(json);
    SetDetails(json);
    const year=json.release_date.slice(0,4);
    SetDate(year);
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
    // console.log(cast)
    const actors=cast.filter(el=>el.known_for_department=="Acting")
    // console.log(cast)
  return (
    <>
    
    {/* <h1 className=' text-white bg-gradient-to-r from-black '>{details.original_title}</h1> */}
    <div className='absolute bg-black w-screen h-screen opacity-85 overflow-y-scroll' >
        <h1 className=' text-white text-xl md:text-4xl ml-10 mt-10'>{details.original_title}</h1>
        <h1 className=' text-red-600  text-sm md:text-xl ml-10 mt-1'>({date})</h1>
        <img className='   mt-6 w-20 h-30 md:w-40 md:h-60 border border-white p-1 m-5 ml-10 md:p-2 md:m-10' alt="img" src={"https://image.tmdb.org/t/p/w780/"+details.poster_path+".jpg"}/>
          <h1 className='text-white ml-10 text-lg md:text-2xl'>Description</h1>  
        <p className=' text-white z-20 text-xs md:text-lg  w-1/2 mx-10 m-2'>{details.overview}</p>
        <div className='flex flex-wrap pl-10 w-full md:pl-10 text-white mt-6 text-sm md:mt-12 font-bold'>

        {genres?.map((g)=><div className= 'text-sm text-red-700 mx-0 -pl-4 '>{g.name+","}</div>)}
        </div>
        <div className='text-white  mx-10 md:mx-10 mt-4 text-sm flex font-bold'>Rating-<div className='text-red-600'>{Math.floor((details.vote_average)*10)/10}/10</div></div>
          <div className='text-white ml-10 md:ml-12 mt-6 md:mt-12 font-bold md:text-3xl'>Cast</div>
      <div className='overflow-x-scroll  h-80 ml-6 md:ml-12 mt-2 md:mt-5 flex   text-white p-2'>

      <div className='flex'>


          {cast &&cast.map((el)=>el.profile_path && <CastCard  name={el.name} link={el.profile_path}/>)}
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
