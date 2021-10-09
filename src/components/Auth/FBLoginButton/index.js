import React from 'react';

import { useHistory } from 'react-router-dom';
import { AiOutlineFacebook } from "react-icons/all";

import { fbLogin } from "../../../api/facebook";
import styles from './FBLoginButton.module.scss';

const FBLoginButton = () => {
    const history = useHistory();

    return (
        <button
            onClick={() => fbLogin(() => history.replace('/'))}
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