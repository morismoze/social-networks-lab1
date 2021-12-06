import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../../api/user/index';

const getUserData = createAsyncThunk('user/getData', api.getUserData);

const addToFavouriteGenres = createAsyncThunk('user/addToFavouriteGenres', api.addToFavouriteGenres);

const removeFromFavouriteGenres = createAsyncThunk('user/removeFromFavouriteGenres', api.removeFromFavouriteGenres);

const addToLikes = createAsyncThunk('user/addToLikes', api.addToLikes);

const removeFromLikes = createAsyncThunk('user/removeFromLikes', api.removeFromLikes);

const addToWatchlist = createAsyncThunk('user/addToWatchlist', api.addToWatchlist);

const removeFromWatchlist = createAsyncThunk('user/removeFromWatchlist', api.removeFromWatchlist);

const addToRatings = createAsyncThunk('user/addToRatings', api.addToRatings);

const logVisit = createAsyncThunk('user/logVisit', api.logVisit);

export const actions = {
    getUserData,
    addToFavouriteGenres,
    removeFromFavouriteGenres,
    addToLikes,
    removeFromLikes,
    addToWatchlist,
    removeFromWatchlist,
    addToRatings,
    logVisit
};