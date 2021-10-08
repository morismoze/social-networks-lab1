import React from 'react';

import { useHistory } from 'react-router-dom';
import { AiFillFacebook } from "react-icons/all";

import { fbLogin } from "../../api/facebook";
import styles from './FBLoginButton.module.scss';

const FBLoginButton = () => {
    const history = useHistory();

    return (
        <button
            onClick={() => fbLogin(() => history.replace('/home'))}
            className={styles.fbLoginButton}
        >
            <AiFillFacebook
                size={20}
            />
            <span className={styles.fbLoginButton__text}>Continue with facebook</span>
        </button>
    );
};

export default FBLoginButton;