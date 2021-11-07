import React from 'react';

import MoviesRoutes from "../../router/MoviesRoutes";
import Header from "../../components/shared/Header";

const MoviesPage = () => {
    return (
        <>
            <Header/>
            <MoviesRoutes/>
        </>
    );
};

export default MoviesPage;