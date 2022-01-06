import React, { useEffect } from 'react';

import { useDispatch } from "react-redux";

import { Helmet } from "react-helmet";
import Header from "../../components/shared/Header";
import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import ComingSoon from "../../components/shared/ComingSoon";
import Footer from "../../components/shared/Footer";
import { setActiveTab } from "../../store/shared/navigation/Navigation.slice";
import { HEADER_NAV_ITEMS } from "../../constants/header";
import styles from './ContactPage.module.scss';

const ContactPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActiveTab(HEADER_NAV_ITEMS[3].id));
    }, []);

    return (
        <>
            <Helmet>
                <title>Contact Us &bull; Recommend.me</title>
            </Helmet>
            <Header/>
            <WithLayoutWrapper className={styles.container}>
                <ComingSoon/>
            </WithLayoutWrapper>
            <Footer/>
        </>
    );
};

export default ContactPage;