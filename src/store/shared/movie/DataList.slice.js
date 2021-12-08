import { createSlice } from "@reduxjs/toolkit";

import { actions } from "./DataList.actions";

const initialState = {
    status: 'idle',
    list: {
        genres: [],
        statuses: []
    }
};

const dataListSlice = createSlice({
    initialState,
    name: 'movieDataList',
    extraReducers: (builder) => {
        builder
            .addCase(actions.getGenres.pending, (state) => {
                state.status = 'waiting';
            })
            .addCase(actions.getGenres.fulfilled, (state, action) => {
                state.status = 'success';
                state.list.genres = action.payload;
            })
            .addCase(actions.getGenres.rejected, (state) => {
                state.status = 'failure';
            })
            .addCase(actions.getStatuses.pending, (state) => {
                state.status = 'waiting';
            })
            .addCase(actions.getStatuses.fulfilled, (state, action) => {
                state.status = 'success';
                state.list.statuses = action.payload;
            })
            .addCase(actions.getStatuses.rejected, (state) => {
                state.status = 'failure';
            })
    }
});

export const dataListReducer = dataListSlice.reducer;