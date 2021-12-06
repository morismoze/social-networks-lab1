import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../../api/movie';
import { toggleLoading } from "../navigation/Navigation.slice";


const getGenres = createAsyncThunk('genre/getGenres', api.getGenres);

const getGenresAndToggleLoader = () => async (dispatch) => {
    await dispatch(toggleLoading(true));
    await dispatch(getGenres());
    await dispatch(toggleLoading(false));
};

export const actions = {
    getGenres,
    getGenresAndToggleLoader
};