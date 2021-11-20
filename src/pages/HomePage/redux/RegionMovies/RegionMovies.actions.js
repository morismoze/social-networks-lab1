import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../../../api/movie';

const getMovies = createAsyncThunk('region/getMovies', api.getRegionMovies);

export const actions = {
    getMovies
};