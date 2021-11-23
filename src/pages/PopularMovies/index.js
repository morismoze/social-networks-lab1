import React from 'react';

import { Helmet } from "react-helmet";

import PopularMoviesRoutes from "../../router/PopularMoviesRoutes";

const PopularMoviesPage = () => {
    return (
        <>
            <Helmet>
                <title>Recommend.me &bull; Explore popular movies</title>
            </Helmet>
            <PopularMoviesRoutes/>
        </>
    );
};

export default PopularMoviesPage;