import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../../api/user/index';

const getUserData = createAsyncThunk('user/getData', api.getUserData);

const getUserCountry = createAsyncThunk('user/getCountry', api.getUserCountry);

export const actions = {
    getUserData,
    getUserCountry
};