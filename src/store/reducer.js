import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from "./shared/user/User.slice";
import { navigationReducer } from "./shared/navigation/Navigation.slice";
import { topRatedMoviesReducer } from "../pages/TopRatedMovies/redux/TopRatedMovies.slice";
import { recommendedMoviesReducer } from "../pages/RecommendedMovies/redux/RecommendedMovies.slice";
import { weatherReducer } from "../components/Weather/redux/Weather.slice";

export const rootReducer = combineReducers({
    userReducer,
    navigationReducer,
    topRatedMoviesReducer,
    recommendedMoviesReducer,
    weatherReducer
});