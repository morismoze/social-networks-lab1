import React, { useState } from 'react';

import ProfileRoutes from "../../router/ProfileRoutes";
import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import Header from "../../components/shared/Header";
import Sidebar from "./Sidebar";
import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
    const [ activeTab, setActiveTab ] = useState('data');

    return (
        <>
            <Header/>
            <WithLayoutWrapper className={styles.layout}>
                <Sidebar
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <div className={styles.dataLayout}>
                    <ProfileRoutes/>
                </div>
            </WithLayoutWrapper>
        </>
    );
};

export default ProfilePage;