import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../../api/user';


const storeUserLike = createAsyncThunk('userActivity/storeUserLike', api.storeUserLike);

const storeUserUnlike = createAsyncThunk('userActivity/storeUserUnlike', api.storeUserUnlike);

const getLikedMovies = createAsyncThunk('userActivity/getLikedMovies', api.getLikedMovies);

export const actions = {
    storeUserLike,
    storeUserUnlike,
    getLikedMovies
};