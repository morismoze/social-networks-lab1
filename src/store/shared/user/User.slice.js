import { createSlice } from "@reduxjs/toolkit";

import { actions } from "./User.actions";

const initialState = {
    status: 'idle',
    id: '',
    name: '',
    email: '',
    pictureUrl: null,
    country: null
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
            .addCase(actions.getUserCountry.pending, (state, action) => {
                state.status = 'waiting';
            })
            .addCase(actions.getUserCountry.fulfilled, (state, action) => {
                state.status = 'success';
                state.country = {
                    country: action.payload.features[0].properties.country,
                    code: action.payload.features[0].properties.country_code
                };
            })
            .addCase(actions.getUserCountry.rejected, (state, action) => {
                state.status = 'failure';
            })
    }
});

export const userReducer = userSlice.reducer;