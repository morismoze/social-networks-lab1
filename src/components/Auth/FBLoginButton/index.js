import React from 'react';

import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { AiOutlineFacebook } from "react-icons/all";

import { storeUserInfo } from "../../../store/shared/user/User.slice";
import { fbLogin } from "../../../api/facebook";
import styles from './FBLoginButton.module.scss';

const FBLoginButton = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const onLoginClick = async () => {
        const callback = ({id, email, name, url}) => {
            dispatch(storeUserInfo({id, email, name, url}));
            history.replace('/');
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