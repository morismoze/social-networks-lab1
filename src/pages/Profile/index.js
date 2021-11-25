import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import ProfileRoutes from "../../router/ProfileRoutes";
import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import Header from "../../components/shared/Header";
import Sidebar from "./Sidebar";
import TabBar from "./TabBar";
import * as UserSelectors from "../../store/shared/user/User.selectors";
import { setActiveTab } from "../../store/shared/navigation/Navigation.slice";
import { SIDEBAR_NAV_ITEMS } from "../../constants/profile";
import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
    const dispatch = useDispatch();

    const location = useLocation();

    const [ activeSidebarTab, setActiveSidebarTab ] = useState();

    const userId = useSelector(UserSelectors.id);
    const userName = useSelector(UserSelectors.name);

    const extractTabFromPath = () => {
        const active = location.pathname.split('/')[2];

        if (active) {
            setActiveSidebarTab(active);
        } else {
            setActiveSidebarTab('personal-information');
        }
    };

    const toggleTabBarTabs = (event, value) => {
      setActiveSidebarTab(SIDEBAR_NAV_ITEMS[value].id);
    };

    useEffect(() => {
        dispatch(setActiveTab(null));
        extractTabFromPath();
    }, [location]);

    if (!userId) {
        return <Navigate to='/auth'/>
    }

    return (
        <>
            <Helmet>
                <title>{userName} - Profile &bull; Recommend.me</title>
            </Helmet>
            <Header/>
            <WithLayoutWrapper className={styles.layout}>
                <TabBar
                    activeSidebarTab={activeSidebarTab}
                    setActiveSidebarTab={toggleTabBarTabs}
                />
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