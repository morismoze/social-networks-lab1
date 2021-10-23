import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../../api/user';
import { toggleLoading } from "../../../store/shared/navigation/Navigation.slice";

const getMovies = createAsyncThunk('topRated/getMovies', api.getTopRatedMovies);

const getMoviesAndStartLoading =
    (params) => async (dispatch) => {
        await dispatch(toggleLoading(true));
        await dispatch(getMovies(params));
        await dispatch(toggleLoading(false));
    }

export const actions = {
    getMovies,
    getMoviesAndStartLoading
}