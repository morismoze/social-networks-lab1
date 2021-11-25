import React from 'react';

import { useSelector } from "react-redux";
import { Fade } from "@mui/material";

import * as NavigationSelectors from '../../../store/shared/navigation/Navigation.selectors';
import logoLoader from '../../../assets/images/logo-loader.svg';
import styles from './Loader.module.scss';

const Loader = () => {
    const isLoading = useSelector(NavigationSelectors.isLoading);

    return (
        <Fade
            in={isLoading}
            timeout={{
                appear: 0,
                enter: 0,
                exit: 1000,
            }}
        >
            <div className={styles.loader}>
                <div className={styles.loader__wrapper}>
                    {[...Array(5)].map((_, index) => (
                        <div
                            className={styles.loader__pillar}
                            key={index}
                        />
                    ))}
                </div>
                <img
                    src={logoLoader}
                    className={styles.loader__logo}
                    alt={'Logo'}
                />
            </div>
        </Fade>
    );
};

export default Loader;