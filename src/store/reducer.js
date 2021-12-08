import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from "./shared/user/User.slice";
import { navigationReducer } from "./shared/navigation/Navigation.slice";
import { topRatedMoviesReducer } from "../pages/MoviesPage/TopRatedMovies/Movies/redux/TopRatedMovies.slice";
import { recommendedMoviesReducer } from "../pages/MoviesPage/RecommendedMovies/Movies/redux/RecommendedMovies.slice";
import { movieReducer } from "./shared/movie/Movie.slice";
import { popularMoviesReducer } from "../pages/MoviesPage/PopularMovies/Movies/redux/PopularMovies.slice";
import { featuredMoviesReducer } from "../pages/HomePage/redux/FeaturedMovies/FeaturedMovies.slice";
import { moviesInTheatersReducer } from "../pages/HomePage/redux/MoviesInTheaters/MoviesInTheaters.slice";
import { regionMoviesReducer } from "../pages/HomePage/redux/RegionMovies/RegionMovies.slice";
import { tableMoviesReducer } from "../pages/Profile/redux/TableMovies.slice";
import { topRevenueMoviesReducer } from "../pages/HomePage/redux/TopRevenueMovies/TopRevenueMovies.slice";
import { personReducer } from "./shared/movie/Person.slice";
import { mostVisitedMoviesReducer } from "../pages/HomePage/redux/MostVisitedMovies/MostVisitedMovies.slice";
import { dataListReducer } from "./shared/movie/DataList.slice";
import { filterReducer } from "../pages/MoviesPage/redux/Filter.slice";

export const rootReducer = combineReducers({
    featuredMoviesReducer,
    filterReducer,
    dataListReducer,
    movieReducer,
    mostVisitedMoviesReducer,
    moviesInTheatersReducer,
    navigationReducer,
    personReducer,
    popularMoviesReducer,
    recommendedMoviesReducer,
    regionMoviesReducer,
    tableMoviesReducer,
    topRatedMoviesReducer,
    topRevenueMoviesReducer,
    userReducer
});