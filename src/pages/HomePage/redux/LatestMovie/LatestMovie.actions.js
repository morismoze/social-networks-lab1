import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../../../api/movie';
import { toggleLoading } from "../../../../store/shared/navigation/Navigation.slice";

const getMovie = createAsyncThunk('latest/getMovie', api.getLatestMovie);

const getMovieAndToggleLoader = () => async (dispatch) => {
    await dispatch(toggleLoading(true));
    await dispatch(getMovie());
    await dispatch(toggleLoading(false));
};

export const actions = {
    getMovie,
    getMovieAndToggleLoader
};