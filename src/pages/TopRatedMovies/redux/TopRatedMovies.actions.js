import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../../api/user';

const getMovies = createAsyncThunk('topRated/getMovies', api.getTopRatedMovies);

export const actions = {
    getMovies
}