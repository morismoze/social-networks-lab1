import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../../api/user/index';

const getUserData = createAsyncThunk('user/getData', api.getUserData);

const addToLikes = createAsyncThunk('user/addToLikes', api.addToLikes);

const removeFromLikes = createAsyncThunk('user/removeFromLikes', api.removeFromLikes);

const addToWatchlist = createAsyncThunk('user/addToWatchlist', api.addToWatchlist);

const removeFromWatchlist = createAsyncThunk('user/removeFromWatchlist', api.removeFromWatchlist);

export const actions = {
    getUserData,
    addToLikes,
    removeFromLikes,
    addToWatchlist,
    removeFromWatchlist
};