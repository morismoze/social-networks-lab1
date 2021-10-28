import React from 'react';

import { ReactComponent as Logo } from '../../../assets/images/logo-icon.svg';
import styles from './PictureLoading.module.scss';

const PictureLoading = ({
    iconSize = 32,
    animation = true
}) => {
    return (
        <div className={styles.pictureLoading}>
            <Logo
                className={styles.pictureLoading__spinner}
                style={{
                    width: iconSize,
                    height: iconSize,
                    animation: animation === false && 'none'
                }}
            />
        </div>
    );
};

export default PictureLoading