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
                <meta
                    name='description'
                    content='Recommend.me is a great source for movie content. Explore fresh-looking pages of many movie groups, details, actors and more important, get personalized recommendations.'
                />
                <meta property="og:image" content='../../assets/images/movie-backdrop-fallback.png'/>
                <meta property='og:image:type' content='image/jpeg'/>
                <meta property='og:image:width' content='200'/>
                <meta property='og:image:height' content='200'/>
                <title>Recommend.me &bull; Home</title>
            </Helmet>
            <Header/>
            <HomeRoutes/>
        </>
    );
};

export default HomePage;