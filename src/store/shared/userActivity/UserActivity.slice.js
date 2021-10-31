import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./UserActivity.actions";

const initialState = {
    status: 'idle',
    likes: []
};

const userActivitySlice = createSlice({
    initialState,
    name: 'userActivity',
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(actions.getLikedMovies.pending, (state, action) => {
                state.status = 'waiting';
            })
            .addCase(actions.getLikedMovies.fulfilled, (state, action) => {
                state.status = 'success';
                state.likes = action.payload;
            })
            .addCase(actions.getLikedMovies.rejected, (state, action) => {
                state.status = 'failure';
            })
            .addCase(actions.storeUserLike.pending, (state, action) => {
                state.status = 'waiting';
            })
            .addCase(actions.storeUserLike.fulfilled, (state, action) => {
                state.status = 'success';
                state.likes = [...state.likes, action.payload]
            })
            .addCase(actions.storeUserLike.rejected, (state, action) => {
                state.status = 'failure';
            })
            .addCase(actions.storeUserUnlike.pending, (state, action) => {
                state.status = 'waiting';
            })
            .addCase(actions.storeUserUnlike.fulfilled, (state, action) => {
                state.status = 'success';
                state.likes = [...state.likes.filter(id => id !== action.payload)]
            })
            .addCase(actions.storeUserUnlike.rejected, (state, action) => {
                state.status = 'failure';
            })
    }
});

export const userActivityReducer = userActivitySlice.reducer;