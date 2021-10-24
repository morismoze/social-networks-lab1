import React from 'react';

import { ReactComponent as Logo } from '../../../assets/images/logo-icon.svg';
import styles from './PictureLoading.module.scss';

const PictureLoading = ({
    iconSize = 32
}) => {
    return (
        <div className={styles.pictureLoading}>
            <Logo
                className={styles.pictureLoading__spinner}
                style={{
                    width: iconSize,
                    height: iconSize
                }}
            />
        </div>
    );
};

export default PictureLoading