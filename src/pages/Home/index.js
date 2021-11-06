import React from 'react';

import HomeRoutes from "../../router/HomeRoutes";
import Header from "../../components/shared/Header";

const HomePage = () => {
    return (
        <>
            <Header/>
            <HomeRoutes/>
        </>
    );
};

export default HomePage;