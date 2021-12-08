import React from 'react';

import { Helmet } from "react-helmet";

import RecommendedMoviesRoutes from "../../../router/RecommendedMoviesRoutes";

const RecommendedMoviesPage = () => {
    return (
        <>
            <Helmet>
                <title>Recommend.me &bull; Explore your recommended movies</title>
            </Helmet>
            <RecommendedMoviesRoutes/>
        </>
    );
};

export default RecommendedMoviesPage;