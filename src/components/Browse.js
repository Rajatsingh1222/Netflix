
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useToprRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import Footer from './Footer';
import Header from './Header';
import MainComponent from './MainComponent';


const Browse = () => {
// 
useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
useUpcomingMovies();
  return (
    <div>

<Header/>
<MainComponent/>
<Footer/>
    </div>
  ) ;
}

export default Browse;