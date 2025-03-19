import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();
    const getVideo=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', options);
    const json=await data.json();
//   console.log(json);
  const trailers=json.results.filter(videos=>videos.type=="Trailer")
  const trailer=trailers.length?trailers[0]:json.results[0];
  console.log(trailer)
  dispatch(addTrailer(trailer));
    }
useEffect(()=>{
    getVideo();
},[])
}
export default useMovieTrailer;