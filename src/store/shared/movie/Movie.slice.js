import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [
        {
            name: 'Venom',
            releaseDate: 'Oct/01/2021',
            posterLink: 'https://www.joblo.com/wp-content/uploads/2019/12/venom-let-there-be-carnage-poster-2-819x1024-1.jpg',
            rating: '8',
            genres: ['Comedy', 'American', 'English'],
            duration: {
                hour: 1,
                minutes: 59
            },
            cast: [
                {
                    name: 'Lillian Burke',
                    pictureLink: 'https://randomuser.me/api/portraits/women/55.jpg'
                },
                {
                    name: 'Alexis Lo',
                    pictureLink: 'https://randomuser.me/api/portraits/men/22.jpg'
                },
                {
                    name: 'Johannes Laurent',
                    pictureLink: 'https://randomuser.me/api/portraits/men/42.jpg'
                },
                {
                    name: 'Iina Saksa',
                    pictureLink: 'https://randomuser.me/api/portraits/women/78.jpg'
                },
                {
                    name: 'Lillian Burke',
                    pictureLink: 'https://randomuser.me/api/portraits/women/55.jpg'
                },
                {
                    name: 'Alexis Lo',
                    pictureLink: 'https://randomuser.me/api/portraits/men/22.jpg'
                },
                {
                    name: 'Johannes Laurent',
                    pictureLink: 'https://randomuser.me/api/portraits/men/42.jpg'
                },
                {
                    name: 'Iina Saksa',
                    pictureLink: 'https://randomuser.me/api/portraits/women/78.jpg'
                },
                {
                    name: 'Lillian Burke',
                    pictureLink: 'https://randomuser.me/api/portraits/women/55.jpg'
                },
                {
                    name: 'Alexis Lo',
                    pictureLink: 'https://randomuser.me/api/portraits/men/22.jpg'
                },
                {
                    name: 'Johannes Laurent',
                    pictureLink: 'https://randomuser.me/api/portraits/men/42.jpg'
                },
                {
                    name: 'Iina Saksa',
                    pictureLink: 'https://randomuser.me/api/portraits/women/78.jpg'
                },
                {
                    name: 'Lillian Burke',
                    pictureLink: 'https://randomuser.me/api/portraits/women/55.jpg'
                },
                {
                    name: 'Alexis Lo',
                    pictureLink: 'https://randomuser.me/api/portraits/men/22.jpg'
                },
                {
                    name: 'Johannes Laurent',
                    pictureLink: 'https://randomuser.me/api/portraits/men/42.jpg'
                },
                {
                    name: 'Iina Saksa',
                    pictureLink: 'https://randomuser.me/api/portraits/women/78.jpg'
                }
            ],
            synopsys: 'After a faulty interview with the Life Foundation ruins his career, former reporter Eddie Brock\'s life is in pieces. Six months later, he comes across the Life Foundation again, and he comes into contact with an alien symbiote and becomes Venom, a parasitic antihero.',
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