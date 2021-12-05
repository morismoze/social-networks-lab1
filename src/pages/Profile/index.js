import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
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

    const navigate = useNavigate();

    const [ activeSidebarTab, setActiveSidebarTab ] = useState();

    const userName = useSelector(UserSelectors.name);

    const extractTabFromPath = () => {
        const activeTab = location.pathname.split('/')[2];

        if (activeTab) {
            setActiveSidebarTab(SIDEBAR_NAV_ITEMS.find((item) => item.path === activeTab).id);
        } else {
            setActiveSidebarTab(1);
        }
    };

    const toggleTabBarTabs = (event, value) => {
      setActiveSidebarTab(value);
    };

    useEffect(() => {
        dispatch(setActiveTab(null));
        extractTabFromPath();
    }, [location]);

    if (!userName) {
        navigate('/auth', { state: location });
        return null;
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