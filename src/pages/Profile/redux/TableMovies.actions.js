import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../../api/movie';


const getMovie = createAsyncThunk('tableMovies/getMovie', api.getMovieDetails);

export const actions = {
    getMovie
};