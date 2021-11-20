import React, { useEffect, useState } from 'react';

import { useDispatch } from "react-redux";

import { useLocation } from "react-router-dom";

import ProfileRoutes from "../../router/ProfileRoutes";
import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import Header from "../../components/shared/Header";
import Sidebar from "./Sidebar";
import { setActiveTab } from "../../store/shared/navigation/Navigation.slice";
import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
    const dispatch = useDispatch();

    const location = useLocation();

    const [ activeSidebarTab, setActiveSidebarTab ] = useState();

    const extractTabFromPath = () => {
        const active = location.pathname.split('/')[2];

        if (active) {
            setActiveSidebarTab(active);
        } else {
            setActiveSidebarTab('personal-information');
        }
    };

    useEffect(() => {
        dispatch(setActiveTab(null));
        extractTabFromPath();
    }, [location]);

    return (
        <>
            <Header/>
            <WithLayoutWrapper className={styles.layout}>
                <Sidebar
                    activeSidebarTab={activeSidebarTab}
                    setActiveSidebarTab={setActiveSidebarTab}
                />
                <div className={styles.dataLayout}>
                    <ProfileRoutes/>
                </div>
            </WithLayoutWrapper>
        </>
    );
};

export default ProfilePage;