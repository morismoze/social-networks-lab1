import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from "./shared/user/User.slice";
import { navigationReducer } from "./shared/navigation/Navigation.slice";
import { movieReducer } from "./shared/movie/Movie.slice";
import { recommendedMoviesReducer } from "../pages/RecommendedPage/RecommendedMoviesData/RecommendedMoviesData.slice";
import { weatherReducer } from "../components/Weather/redux/Weather.slice";

export const rootReducer = combineReducers({
    userReducer,
    navigationReducer,
    movieReducer,
    recommendedMoviesReducer,
    weatherReducer
});