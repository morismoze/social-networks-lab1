import React, { useEffect } from 'react';

import { Helmet } from "react-helmet";

import { useDispatch } from "react-redux";

import Header from "../../components/shared/Header";
import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import ComingSoon from "../../components/shared/ComingSoon";
import Footer from "../../components/shared/Footer";
import { setActiveTab } from "../../store/shared/navigation/Navigation.slice";
import { HEADER_NAV_ITEMS } from "../../constants/header";
import styles from './AboutPage.module.scss';

const AboutPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActiveTab(HEADER_NAV_ITEMS[2].id));
    }, []);

    return (
        <>
            <Helmet>
                <title>About &bull; Recommend.me</title>
            </Helmet>
            <Header/>
            <WithLayoutWrapper className={styles.container}>
                <ComingSoon/>
            </WithLayoutWrapper>
            <Footer/>
        </>
    );
};

export default AboutPage;