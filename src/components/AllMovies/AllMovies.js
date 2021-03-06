
import React, { useState, useEffect } from 'react';
import {getUpcoming, getPopular, getTopRated} from '../../../services/movie-service';
import Carousel from '../Carousel/Carousel'
import './AllMovies.scss'

function getAllMovies(props) {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
      getTopRated()
      .then((response) => {
        setTopRatedMovies(response.data);
      })
      getUpcoming()
      .then((response) => {
        setUpcomingMovies(response.data)
      })
      getPopular()
      .then((response) => {
        setPopularMovies(response.data)
      })
      .catch((err) => console.log(err));
  }, []);

  return ( 
    <div className ='everything'>
      <h1 className ='title'>MYFLIX</h1> 
        
      {topRatedMovies.results?(<Carousel movies = {topRatedMovies.results} title = 'Top Rated' />): 'Loading Top Rated Movies'}
      
      {upcomingMovies.results?(<Carousel movies = {upcomingMovies.results} title = 'Upcoming' />): 'Loading Upcoming Movies'}
     
      {popularMovies.results?(<Carousel movies = {popularMovies.results} title = 'Popular' />): 'Loading Most Popular Movies'}
    </div>
  );
}

export default getAllMovies;
