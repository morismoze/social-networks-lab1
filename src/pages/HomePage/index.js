import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Movies/Header";
import Hero from "../../components/Hero";
import * as UserSelectors from '../../store/shared/User.selectors';
import { getUserFbData } from "../../api/facebook";
import { storeUserInfo } from "../../store/shared/User.slice";

const HomePage = () => {
    const dispatch = useDispatch();

    const userName = useSelector(UserSelectors.name);

    const userPictureLink = useSelector(UserSelectors.pictureLink);

    const onUserDataFetch = async () => {
        const callback = ({id, email, name, url}) => {
            dispatch(storeUserInfo({id, email, name, url}));
        };

        await getUserFbData(callback);
    };

    useEffect(() => {
        if(!userName) {
            onUserDataFetch();
        }
    }, [userName]);

    return (
        <div>
            <Header
                userName={userName}
                userPictureLink={userPictureLink}
            />
            <Hero/>
        </div>
    );
};

export default HomePage;