import React from 'react';

import Header from "../../components/shared/Header";
import RecommendedMoviesRoutes from "../../router/RecommendedMoviesRoutes";

const RecommendedMoviesPage = () => {
    return (
        <>
            <Header/>
            <RecommendedMoviesRoutes/>
        </>
    );
};

export default RecommendedMoviesPage;