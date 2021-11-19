import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../../../api/movie';

const getMovie = createAsyncThunk('latest/getMovie', api.getLatestMovie);

export const actions = {
    getMovie
};