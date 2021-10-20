import React from 'react';

import { useSelector } from "react-redux";
import { Fade } from "@mui/material";

import * as NavigationSelectors from '../../../store/shared/navigation/Navigation.selectors';
import styles from './Loader.module.scss';

const Loader = () => {
    const isLoading = useSelector(NavigationSelectors.isLoading);

    if (!isLoading) {
        return null;
    }

    return (
        <Fade in={true}>
            <div className={styles.loader}>
                <div className={styles.loader__wrapper}>
                    {Array(5).fill(
                        <div className={styles.loader__pillar}/>
                    )}
                </div>
            </div>
        </Fade>
    );
};

export default Loader;