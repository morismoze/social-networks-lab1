import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Movies/Header";
import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import * as UserSelectors from '../../store/shared/User.selectors';
import * as HeaderSelectors from '../../components/Movies/Header/redux/Header.selectors';
import { getUserFbData } from "../../api/facebook";
import { storeUserInfo } from "../../store/shared/User.slice";
import { HEADER_NAV_ITEMS } from "../../constants/header";
import FeaturedMovie from "../../components/Movies/FeaturedMovie";

const HomePage = () => {
    const dispatch = useDispatch();

    const userName = useSelector(UserSelectors.name);

    const activeTab = useSelector(HeaderSelectors.activeTab);

    const userPictureLink = useSelector(UserSelectors.pictureLink);

    const onUserDataFetch = async () => {
        const callback = ({id, email, name, url}) => {
            dispatch(storeUserInfo({id, email, name, url}));
        };

        await getUserFbData(callback);
    };

    const Children = () => (
        <>
            <Header
                userName={userName}
                userPictureLink={userPictureLink}
            />
            {HEADER_NAV_ITEMS[0].id === activeTab &&
                <FeaturedMovie/>
            }
        </>
    );

    const WithHomePageLayout = WithLayoutWrapper(Children);

    useEffect(() => {
        if(!userName) {
            onUserDataFetch();
        }
    }, [userName]);

    return (
        <WithHomePageLayout/>
    );
};

export default HomePage;