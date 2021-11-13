import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../../../api/movie';
import { toggleLoading } from "../../../../store/shared/navigation/Navigation.slice";

const getMovies = createAsyncThunk('inTheaters/getMovies', api.getMoviesInTheaters);

const getMoviesAndToggleLoader = (limit) => async (dispatch) => {
    await dispatch(toggleLoading(true));
    await dispatch(getMovies(limit));
    await dispatch(toggleLoading(false));
};

export const actions = {
    getMovies,
    getMoviesAndToggleLoader
};