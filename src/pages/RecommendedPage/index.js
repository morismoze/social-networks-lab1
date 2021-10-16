import React from 'react';

import Header from "../../components/shared/Header";
import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import styles from './RecommendedPage.module.scss';
import Title from "../../components/shared/Title";

const RecommendedPage = () => {

    const Children = () => (
        <div className={styles.recommendedMoviesContainer}>
            <Title
                title={'Recommended for You'}
                className={styles.recommendedMoviesContainer__title}
            />
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

export default RecommendedPage;