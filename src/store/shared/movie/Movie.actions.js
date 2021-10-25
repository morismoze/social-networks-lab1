import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../../api/movie';
import { toggleLoading } from "../navigation/Navigation.slice";


const getDetails = createAsyncThunk('movie/getDetails', api.getMovieDetails);

const getMovieDetailsAndToggleLoader = (params) => async (dispatch) => {
    await dispatch(toggleLoading(true));
    await dispatch(getDetails(params));
    await dispatch(toggleLoading(false));
};

export const actions = {
    getDetails,
    getMovieDetailsAndToggleLoader
};