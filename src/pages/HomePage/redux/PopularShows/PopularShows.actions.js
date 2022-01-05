import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../../../api/show';
import { toggleLoading } from "../../../../store/shared/navigation/Navigation.slice";

const getShows = createAsyncThunk('popularShows/getShows', api.getPopularShows);

const getShowsAndToggleLoader = () => async (dispatch) => {
    await dispatch(toggleLoading(true));
    await dispatch(getShows());
    await dispatch(toggleLoading(false));
};

export const actions = {
    getShows,
    getShowsAndToggleLoader
};