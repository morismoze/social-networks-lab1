import { createSlice } from "@reduxjs/toolkit";

import { actions } from './Weather.actions';

const initialState = {
    currentWeather: null
};

const weatherSlice = createSlice({
    initialState,
    name: 'weather',
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(actions.getCurrentWeather.pending, (state) => {
                state.status = 'waiting';
                state.currentWeather = initialState.currentWeather;
            })
            .addCase(actions.getCurrentWeather.fulfilled, (state, action) => {
                state.status = 'success';
                state.currentWeather = action.payload;
            })
            .addCase(actions.getCurrentWeather.rejected, (state) => {
                state.status = 'failure';
                state.currentWeather = initialState.currentWeather;
            })
    }
});

export const weatherReducer = weatherSlice.reducer;