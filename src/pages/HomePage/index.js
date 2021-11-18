import React, {useEffect} from 'react';

import HomeRoutes from "../../router/HomeRoutes";
import Header from "../../components/shared/Header";

const HomePage = () => {
    useEffect(() => {
        // @todo: fix behavior to instant
        window.scrollTo(0, 0, { behavior: 'instant' });
    }, []);

    return (
        <>
            <Header/>
            <HomeRoutes/>
        </>
    );
};

export default HomePage;