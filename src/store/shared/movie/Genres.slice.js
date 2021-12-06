import { createSlice } from "@reduxjs/toolkit";

import { actions } from "./Genres.actions";

const initialState = {
    status: 'idle',
    genres: []
};

const genresSlice = createSlice({
    initialState,
    name: 'genre',
    extraReducers: (builder) => {
        builder
            .addCase(actions.getGenres.pending, (state) => {
                state.status = 'waiting';
                state.genres = initialState.genres;
            })
            .addCase(actions.getGenres.fulfilled, (state, action) => {
                state.status = 'success';
                state.genres = action.payload;
            })
            .addCase(actions.getGenres.rejected, (state) => {
                state.status = 'failure';
                state.genres = initialState.genres;
            })
    }
});

export const genresReducer = genresSlice.reducer;