import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../../api/movie';
import { toggleLoading } from "../navigation/Navigation.slice";

const getGenres = createAsyncThunk('movieDataList/getGenres', api.getGenres);

const getStatuses = createAsyncThunk('movieDataList/getStatuses', api.getStatuses);

const getGenresAndToggleLoader = () => async (dispatch) => {
    await dispatch(toggleLoading(true));
    await dispatch(getGenres());
    await dispatch(toggleLoading(false));
};

const getStatusesAndToggleLoader = () => async (dispatch) => {
    await dispatch(toggleLoading(true));
    await dispatch(getStatuses());
    await dispatch(toggleLoading(false));
};

export const actions = {
    getGenres,
    getStatuses,
    getGenresAndToggleLoader,
    getStatusesAndToggleLoader
};