
import { useEffect, useState } from 'react';
import axios from 'axios';
import './pages.scss'

import ArtistCard from '../components/ArtistCard/ArtistCard'

const SingleMovie = ({ match }) => {
 const [movieInfo, setMovieInfo] = useState({
    isFetched: false,
    data: [],
    error: null
  });

  const [actorsList, setActorsList] = useState({
    isFetched: false,
    data: [],
    error: null
  });
  


  useEffect(() => {

     


    axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}`, {
      params: {
        api_key: '8d08d31e1b08de961a19e2ae293de867'
      }
    })
    .then(function (response) {
      setMovieInfo({
        isFetched: true,
        data: response.data,
        error: false,
      })
    })
    .catch(function (error) {
      setMovieInfo({
        isFetched: true,
        data: [],
        error: error,
      })
    })
    .then(function () {
      // always executed
    });    


      



    

     axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/credits`, {
      params: {
        api_key: '8d08d31e1b08de961a19e2ae293de867'
      }
    })
    .then(function (response) {
      setActorsList({
        isFetched: true,
        data: response.data,
        error: false,
      })
    })
    .catch(function (error) {
      setActorsList({
        isFetched: true,
        data: [],
        error: error,
      })
    })
    .then(function () {
      // always executed
    }); 

   }, [])



   console.log(actorsList.data);

const movieInfoData = movieInfo.data;
const movieCastActors = actorsList.data.cast;

  return (
  <>
  {
    movieInfo.isFetched && actorsList.isFetched ? (
      <div className="movie-info ">
        <img className="movieInfo-back" src={`https://image.tmdb.org/t/p/w500/${movieInfoData.backdrop_path}`} alt=""/>
       <div className="movie-info-front container">
          <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${movieInfoData.poster_path}`} alt=""/>
        
<div className="front-info  ">
  
  <h3 className="title">{movieInfoData.title}</h3>
  <h3 className="tagline">{movieInfoData.tagline}</h3>

  <h3 className="overview">{movieInfoData.overview}</h3>
<h3 className="budget">Budget: ${movieInfoData.budget}</h3>
<h3 className="release">Release date: {movieInfoData.release_date}</h3>
<h3 className="runtime">Runtime: {movieInfoData.runtime}</h3>

  <h3 className="original-title">{movieInfoData.original_title}</h3>

  <a className="home-page" href={movieInfoData.homepage} target="_blank">  Official site</a>
  {
    movieInfoData.genres.map((genre, index) =>
    (
      <button className="button-bt" key={index}>{genre.name}</button>
    ))
  }
  <h2>Actors</h2>
<div className="actors-list">
{
 actorsList.data.cast.map((actor, index) =>  (
    <ArtistCard 
    id={actor.id}
    key={index}
    name={actor.name}
    charName={actor.character}
    imgLink={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
    />
  ))
}
</div>
</div>
</div>
</div>
    ) : (
      <h2 className="loading">Loading...</h2>
    )
  }
  
  </>
    )
}

export default SingleMovie;
