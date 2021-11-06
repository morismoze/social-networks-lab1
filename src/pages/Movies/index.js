import React from 'react';

import MoviesRoutes from "../../router/MoviesRoutes";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import styles from './MoviesPage.module.scss';

const MoviesPage = () => {
    return (
        <div className={styles.flexWrapper}>
            <div className={styles.flexWrapper__main}>
                <Header/>
                <MoviesRoutes/>
            </div>
            <Footer/>
        </div>
    );
};

export default MoviesPage;