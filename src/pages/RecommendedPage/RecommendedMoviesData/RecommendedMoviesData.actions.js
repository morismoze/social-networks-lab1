import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../../api/user/index';

const getRecommendedMovies = createAsyncThunk('recommendedMovies/getRecommendedMovies', api.getRecommendedMovies);

export const actions = {
    getRecommendedMovies
}