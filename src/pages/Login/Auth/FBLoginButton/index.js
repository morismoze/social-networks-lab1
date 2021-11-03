import React from 'react';

import { useDispatch } from "react-redux";
import { useHistory, useLocation } from 'react-router-dom';
import { AiOutlineFacebook } from "react-icons/all";

import { storeUserInfo } from "../../../../store/shared/user/User.slice";
import { fbLogin } from "../../../../api/facebook";
import styles from './FBLoginButton.module.scss';

const FBLoginButton = () => {
    const history = useHistory();

    const location = useLocation();

    const dispatch = useDispatch();

    const getProtectedRouteToVisit = () => {
        if (location.state && location.state.from) {
            const { state: { from: { pathname, search } } } = location;

            if (search) {
                return pathname + search;
            } else {
                return pathname;
            }
        } else {
            return '/top-rated';
        }
    };

    const onLoginClick = async () => {
        const callback = ({id, email, name, url}) => {
            dispatch(storeUserInfo({id, email, name, url}));

            const protectedRouteToVisit = getProtectedRouteToVisit();
            history.replace(protectedRouteToVisit);
        };

        await fbLogin(callback);
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