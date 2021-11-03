import React from 'react';

import Header from "../../components/shared/Header";
import TopRatedMoviesRoutes from "../../router/TopRatedMoviesRoutes";

const TopRatedPage = () => {
    return (
        <>
            <Header/>
            <TopRatedMoviesRoutes/>
        </>
    );
};

export default TopRatedPage;