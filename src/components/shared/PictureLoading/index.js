import React from 'react';

import { ReactComponent as Logo } from '../../../assets/images/logo-icon.svg';
import styles from './PictureLoading.module.scss';

const PictureLoading = () => {
    return (
        <div className={styles.pictureLoading}>
            <Logo className={styles.pictureLoading__spinner}/>
        </div>
    );
};

export default PictureLoading