import React, {useEffect} from 'react';

import HomeRoutes from "../../router/HomeRoutes";
import Header from "../../components/shared/Header";

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header/>
            <HomeRoutes/>
        </>
    );
};

export default HomePage;