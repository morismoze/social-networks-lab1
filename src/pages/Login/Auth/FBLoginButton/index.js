import React from 'react';

import { useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { AiOutlineFacebook } from "react-icons/all";

import { toggleLoading } from "../../../../store/shared/navigation/Navigation.slice";
import styles from './FBLoginButton.module.scss';

const FBLoginButton = () => {
    const location = useLocation();

    const dispatch = useDispatch();

    const getProtectedRouteToVisit = () => {
        if (!location.state) {
            return '/';
        }

        const { state: { pathname, search } } = location;

        if (search) {
            return pathname + search;
        } else {
            return pathname;
        }
    };

    const onLoginClick = () => {
        const redirectUri = window.location.href;
        const fbId = process.env.REACT_APP_FB_APP_ID;
        const state = getProtectedRouteToVisit();

        dispatch(toggleLoading(true));
        window.location = encodeURI(`https://www.facebook.com/dialog/oauth?client_id=${fbId}&redirect_uri=${redirectUri}&response_type=token&state=${state}`);
    };

    return (
        <button
            onClick={onLoginClick}
            className={styles.fbLoginButton}
        >
            <AiOutlineFacebook
                size={20}
            />
            <span className={styles.fbLoginButton__text}>Continue with Facebook</span>
        </button>
    );
};

export default FBLoginButton;