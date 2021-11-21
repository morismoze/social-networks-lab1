import React from 'react';

import PeopleRoutes from "../../router/PeopleRoutes";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import styles from './People.module.scss';

const PeoplePage = () => {
    return (
        <div className={styles.people}>
            <Header/>
            <WithLayoutWrapper>
                <PeopleRoutes/>
            </WithLayoutWrapper>
            <Footer/>
        </div>
    );
};

export default PeoplePage;