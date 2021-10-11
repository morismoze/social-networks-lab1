import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [
        {
            name: 'Moonlight',
            releaseDate: '11/30/2017',
            rating: '8/10',
            genres: ['Same-sex', 'American', 'English'],
            duration: {
                hour: 1,
                minutes: 59
            },
            cast: [
                {
                    name: '',
                    pictureLink: ''
                },
                {
                    name: '',
                    pictureLink: ''
                },
                {
                    name: '',
                    pictureLink: ''
                },
                {
                    name: '',
                    pictureLink: ''
                }
            ],
            synopsys: 'A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood. Three time periods - young adolescence, mid-teen and young adult - in the life of black-American Chiron is presented.',
            featured: true
        }
    ]
};

const movieSlice = createSlice({
    initialState,
    name: 'featuredMovie',
    reducers: {},
    extraReducers: (builder) => {}
});

export const movieReducer = movieSlice.reducer;