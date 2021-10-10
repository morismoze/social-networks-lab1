import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from "./shared/User.slice";
import { headerReducer } from "../components/Movies/Header/redux/Header.slice";

export const rootReducer = combineReducers({
    userReducer,
    headerReducer
});