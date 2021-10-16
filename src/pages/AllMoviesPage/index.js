import React from 'react';

import Header from "../../components/shared/Header";
import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import styles from './AllMoviesPage.module.scss';

const AllMoviesPage = () => {

    const Children = () => (
        <div className={styles.allMoviesMoviesContainer}>
            all movies
        </div>
    );

    const WithRecommendedPageLayout = WithLayoutWrapper(Children);

    return (
        <>
            <Header/>
            <WithRecommendedPageLayout/>
        </>
    );
};

export default AllMoviesPage;