import { createSelector } from '@reduxjs/toolkit';

export const currentWeather = createSelector(
    (globalState) => globalState.weatherReducer,
    (state) => state.currentWeather
);