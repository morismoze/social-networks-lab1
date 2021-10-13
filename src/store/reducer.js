import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from "./shared/user/User.slice";
import { navigationReducer } from "./shared/navigation/Navigation.slice";
import { movieReducer } from "./shared/movie/Movie.slice";

export const rootReducer = combineReducers({
    userReducer,
    navigationReducer,
    movieReducer
});