import React from 'react';

import { useNavigate } from "react-router";

import Button from "../Button";
import styles from './ComingSoon.module.scss';

const ComingSoon = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/');
    };

    return (
        <div className={styles.container}>
            <span className={styles.container__title}>Coming soon</span>
            <div className={styles.container__splitter}/>
            <span className={styles.container__sub}>We are currently working on creating this page. We'll be launching soon.</span>
            <Button
                onClick={handleRedirect}
                text='GO TO HOMEPAGE'
                fill
            />
        </div>
    );
};

export default ComingSoon;