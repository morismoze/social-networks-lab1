import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import Footer from "../../../components/shared/Footer";
import styles from './Home.module.scss';

const Home = () => {
    const dispatch = useDispatch();

    return (
        <>
            <div className={styles.home}>

                <Footer/>
            </div>
        </>
    );
};

export default Home;