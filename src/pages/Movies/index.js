import React from 'react';

import MoviesRoutes from "../../router/MoviesRoutes";
import Header from "../../components/shared/Header";
import styles from './MoviesPage.module.scss';

const MoviesPage = () => {
    return (
        <div className={styles.flexWrapper}>
            <div className={styles.flexWrapper__main}>
                <Header/>
                <MoviesRoutes/>
            </div>
        </div>
    );
};

export default MoviesPage;