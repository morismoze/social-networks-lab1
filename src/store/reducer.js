import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from "./shared/user/User.slice";
import { navigationReducer } from "./shared/navigation/Navigation.slice";
import { topRatedMoviesReducer } from "../pages/TopRatedMovies/Movies/redux/TopRatedMovies.slice";
import { recommendedMoviesReducer } from "../pages/RecommendedMovies/Movies/redux/RecommendedMovies.slice";
import { weatherReducer } from "../components/Weather/redux/Weather.slice";
import { movieReducer } from "./shared/movie/Movie.slice";
import { userActivityReducer } from "./shared/userActivity/UserActivity.slice";
import { popularMoviesReducer } from "../pages/PopularMovies/Movies/redux/PopularMovies.slice";
import { featuredMoviesReducer } from "../pages/HomePage/redux/FeaturedMovies/FeaturedMovies.slice";
import { moviesInTheatersReducer } from "../pages/HomePage/redux/MoviesInTheaters/MoviesInTheaters.slice";

export const rootReducer = combineReducers({
    movieReducer,
    navigationReducer,
    recommendedMoviesReducer,
    topRatedMoviesReducer,
    popularMoviesReducer,
    featuredMoviesReducer,
    moviesInTheatersReducer,
    userActivityReducer,
    userReducer,
    weatherReducer,
});