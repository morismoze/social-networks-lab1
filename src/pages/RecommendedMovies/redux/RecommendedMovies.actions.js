import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../../api/movie';

const getMovies = createAsyncThunk('recommended/getMovies', api.getRecommendedMovies);

export const actions = {
    getMovies
};