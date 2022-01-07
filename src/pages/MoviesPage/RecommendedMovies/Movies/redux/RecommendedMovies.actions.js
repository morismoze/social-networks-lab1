import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../../../../api/movie';
import { toggleLoading } from "../../../../../store/shared/navigation/Navigation.slice";

const getMovies = createAsyncThunk('recommended/getMovies', api.getRecommendedMovies);

const getMoviesAndToggleLoader = () => async (dispatch) => {
    await dispatch(toggleLoading(true));
    await dispatch(getMovies());
    await dispatch(toggleLoading(false));
};

export const actions = {
    getMovies,
    getMoviesAndToggleLoader
};