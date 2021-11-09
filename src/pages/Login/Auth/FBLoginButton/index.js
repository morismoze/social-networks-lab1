import React from 'react';

import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineFacebook } from "react-icons/all";

import { storeUserInfo } from "../../../../store/shared/user/User.slice";
import { fbLogin } from "../../../../api/facebook";
import styles from './FBLoginButton.module.scss';

const FBLoginButton = () => {
    const navigate = useNavigate();

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
        fbLogin(() => {
            const protectedRouteToVisit = getProtectedRouteToVisit();
            navigate(protectedRouteToVisit, { replace: true });
        });
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