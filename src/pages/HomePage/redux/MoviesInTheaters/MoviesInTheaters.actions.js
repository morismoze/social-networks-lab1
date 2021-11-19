import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../../../api/movie';

const getMovies = createAsyncThunk('inTheaters/getMovies', api.getMoviesInTheaters);

export const actions = {
    getMovies
};