import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../../api/user';

const getMovies = createAsyncThunk('recommended/getMovies', api.getRecommendedMovies);

export const actions = {
    getMovies
};