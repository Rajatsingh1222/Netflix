
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import Footer from './Footer';
import Header from './Header';
import MainComponent from './MainComponent';


const Browse = () => {
// 
useNowPlayingMovies();
usePopularMovies();
  return (
    <div>

<Header/>
<MainComponent/>
<Footer/>
    </div>
  ) ;
}

export default Browse;