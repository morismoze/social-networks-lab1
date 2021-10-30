import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: '',
    name: '',
    email: '',
    pictureLink: null
};

const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        storeUserInfo: (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.pictureLink = action.payload.url;
        }
    }
});

export const { storeUserInfo } = userSlice.actions;

export const userReducer = userSlice.reducer;