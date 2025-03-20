import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';

const MainVideo = ({movieId}) => {
    const trailerKey=useSelector(store=>store.movies?.trailer?.key)
    useMovieTrailer(movieId);
    return (
    <div>
     <iframe className='w-screen aspect-video transform: scale(1.5); transform-origin: center center' src={"https://www.youtube.com/embed/"+trailerKey+"?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default MainVideo;