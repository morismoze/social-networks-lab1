import { createSlice } from "@reduxjs/toolkit";

import { actions } from "./User.actions";

const initialState = {
    status: 'idle',
    id: '',
    name: '',
    email: '',
    pictureUrl: null,
    likes: [],
    watchlist: [],
    location: null
};

const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        clearUser: (state) => {
            state.status = 'idle';
            state.id = '';
            state.name = '';
            state.email = '';
            state.pictureUrl = null;
            state.likes = [];
            state.watchlist = [];
            state.location = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(actions.getUserData.pending, (state, action) => {
                state.status = 'waiting';
            })
            .addCase(actions.getUserData.fulfilled, (state, action) => {
                state.status = 'success';
                state.id = action.payload.id;
                state.name = action.payload.name;
                state.email = action.payload.email;
                state.pictureUrl = action.payload.pictureUrl;
                state.likes = action.payload.likes;
                state.watchlist = action.payload.watchlist;
                state.location = action.payload.location;
            })
            .addCase(actions.getUserData.rejected, (state, action) => {
                state.status = 'failure';
            })
            .addCase(actions.addToLikes.pending, (state, action) => {
                state.status = 'waiting';
            })
            .addCase(actions.addToLikes.fulfilled, (state, action) => {
                state.status = 'success';
                state.likes = [...state.likes, action.payload]
            })
            .addCase(actions.addToLikes.rejected, (state, action) => {
                state.status = 'failure';
            })
            .addCase(actions.removeFromLikes.pending, (state, action) => {
                state.status = 'waiting';
            })
            .addCase(actions.removeFromLikes.fulfilled, (state, action) => {
                state.status = 'success';
                state.likes = [...state.likes.filter(id => id !== action.payload)]
            })
            .addCase(actions.removeFromLikes.rejected, (state, action) => {
                state.status = 'failure';
            })
            .addCase(actions.addToWatchlist.pending, (state, action) => {
                state.status = 'waiting';
            })
            .addCase(actions.addToWatchlist.fulfilled, (state, action) => {
                state.status = 'success';
                state.watchlist = [...state.watchlist, action.payload]
            })
            .addCase(actions.addToWatchlist.rejected, (state, action) => {
                state.status = 'failure';
            })
            .addCase(actions.removeFromWatchlist.pending, (state, action) => {
                state.status = 'waiting';
            })
            .addCase(actions.removeFromWatchlist.fulfilled, (state, action) => {
                state.status = 'success';
                state.watchlist = [...state.watchlist.filter(id => id !== action.payload)]
            })
            .addCase(actions.removeFromWatchlist.rejected, (state, action) => {
                state.status = 'failure';
            })
    }
});

export const { clearUser } = userSlice.actions;

export const userReducer = userSlice.reducer;