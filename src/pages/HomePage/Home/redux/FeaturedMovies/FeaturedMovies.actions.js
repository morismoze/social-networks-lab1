import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../../../../api/movie';
import { toggleLoading } from "../../../../../store/shared/navigation/Navigation.slice";

const getMovies = createAsyncThunk('featured/getMovies', api.getFeaturedMovies);

const getMoviesAndToggleLoader = (limit) => async (dispatch) => {
    await dispatch(toggleLoading(true));
    await dispatch(getMovies(limit));
    await dispatch(toggleLoading(false));
};

export const actions = {
    getMovies,
    getMoviesAndToggleLoader
};