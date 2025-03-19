import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    const getNowPlayingmovies=async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);
        const json=await data.json();
        
        dispatch(addNowPlayingMovies(json.results));
        console.log(json);
    }
    useEffect(()=>{
        getNowPlayingmovies();
    },[])

}

export default useNowPlayingMovies;