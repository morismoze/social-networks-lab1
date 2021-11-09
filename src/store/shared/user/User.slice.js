import { createSlice } from "@reduxjs/toolkit";

import { actions } from "./User.actions";

const initialState = {
    status: 'idle',
    id: '',
    name: '',
    email: '',
    pictureUrl: null
};

const userSlice = createSlice({
    initialState,
    name: 'user',
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
            })
            .addCase(actions.getUserData.rejected, (state, action) => {
                state.status = 'failure';
            })
    }
});

export const { storeUserInfo } = userSlice.actions;

export const userReducer = userSlice.reducer;