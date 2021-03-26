import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import PopularsPage from './pages/PopularsPage';
import SingleMovie from './pages/SingleMovie';
import TvMovie from './pages/TvMovie';
import Upcoming from './pages/Upcoming';
import LastMovies from './pages/LastMovies';


import Header from './containers/Header';
import HeaderTop from './containers/headerTop'
import '../../the-movie-app/src/assets/styles/main.scss'

function App() {

  return (
    <Router>
      <Header/>
      <Switch>
      {/* <HeaderTop/> */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Upcoming" component={Upcoming} />
        <Route exact path="/LastMovies" component={LastMovies} />
        <Route exact path="/TvMovie" component={TvMovie} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/populars" component={PopularsPage} />
        <Route exact path="/movie/:id" component={SingleMovie} />
      </Switch>
    </Router>
  );
}

export default App;