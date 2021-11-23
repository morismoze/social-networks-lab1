import React, { useEffect } from 'react';

import { Helmet } from "react-helmet";

import HomeRoutes from "../../router/HomeRoutes";
import Header from "../../components/shared/Header";

const HomePage = () => {
    useEffect(() => {
        // @todo: fix behavior to instant
        window.scrollTo(0, 0, { behavior: 'instant' });
    }, []);

    return (
        <>
            <Helmet>
                <title>Recommend.me &bull; Home</title>
            </Helmet>
            <Header/>
            <HomeRoutes/>
        </>
    );
};

export default HomePage;