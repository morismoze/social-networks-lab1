import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../../api/weather/index';

const getCurrentWeather = createAsyncThunk('weather/getCurrentWeather', api.getCurrentWeather);

export const actions = {
    getCurrentWeather
};