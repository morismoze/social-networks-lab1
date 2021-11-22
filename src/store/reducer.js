import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from "./shared/user/User.slice";
import { navigationReducer } from "./shared/navigation/Navigation.slice";
import { topRatedMoviesReducer } from "../pages/TopRatedMovies/Movies/redux/TopRatedMovies.slice";
import { recommendedMoviesReducer } from "../pages/RecommendedMovies/Movies/redux/RecommendedMovies.slice";
import { weatherReducer } from "../components/Weather/redux/Weather.slice";
import { movieReducer } from "./shared/movie/Movie.slice";
import { popularMoviesReducer } from "../pages/PopularMovies/Movies/redux/PopularMovies.slice";
import { featuredMoviesReducer } from "../pages/HomePage/redux/FeaturedMovies/FeaturedMovies.slice";
import { moviesInTheatersReducer } from "../pages/HomePage/redux/MoviesInTheaters/MoviesInTheaters.slice";
import { regionMoviesReducer } from "../pages/HomePage/redux/RegionMovies/RegionMovies.slice";
import { tableMoviesReducer } from "../pages/Profile/redux/TableMovies.slice";
import { latestMovieReducer } from "../pages/HomePage/redux/LatestMovie/LatestMovie.slice";
import { personReducer } from "./shared/movie/Person.slice";

export const rootReducer = combineReducers({
    featuredMoviesReducer,
    latestMovieReducer,
    movieReducer,
    moviesInTheatersReducer,
    navigationReducer,
    personReducer,
    popularMoviesReducer,
    recommendedMoviesReducer,
    regionMoviesReducer,
    tableMoviesReducer,
    topRatedMoviesReducer,
    userReducer,
    weatherReducer
});