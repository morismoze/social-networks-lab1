import React from 'react';

import Header from "../../components/shared/Header";
import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import styles from './AllMoviesPage.module.scss';

const AllMoviesPage = () => {
    return (
        <>
            <Header/>
            <WithLayoutWrapper>
                <div className={styles.allMoviesMoviesContainer}>
                    all movies
                </div>
            </WithLayoutWrapper>
        </>
    );
};

export default AllMoviesPage;