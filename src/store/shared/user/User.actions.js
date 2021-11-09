import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../../api/user/index';

const getUserData = createAsyncThunk('user/getData', api.getUserData);

export const actions = {
    getUserData
};