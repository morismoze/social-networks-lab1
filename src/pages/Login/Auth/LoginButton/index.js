import React from 'react';

import { AiOutlineFacebook, AiOutlineGoogle } from "react-icons/all";

import styles from './LoginButton.module.scss';

const LoginButton = ({
    type,
    onClick
}) => {
    return (
        <button
            onClick={onClick}
            className={styles.loginBtn}
        >
            {type === 'fb' && <AiOutlineFacebook size={20}/>}
            <span className={styles.loginBtn__text}>
                {type === 'fb' && 'Continue with Facebook'}
            </span>
        </button>
    );
};

export default LoginButton;