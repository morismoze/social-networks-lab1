import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../../api/movie/index';

const getPopularMovies = createAsyncThunk('popularMovies/getPopularMovies', api.getPopularMovies);

export const actions = {
    getPopularMovies
}