import React from 'react';

import { Helmet } from "react-helmet";

import TopRatedMoviesRoutes from "../../../router/TopRatedMoviesRoutes";

const TopRatedMoviesPage = () => {
    return (
        <>
            <Helmet>
                <title>Recommend.me &bull; Explore top rated movies</title>
            </Helmet>
            <TopRatedMoviesRoutes/>
        </>
    );
};

export default TopRatedMoviesPage;