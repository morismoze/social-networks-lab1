import React from 'react';

import { ReactComponent as Logo } from '../../../assets/images/logo-icon.svg';
import styles from './PictureLoading.module.scss';
import classNames from "classnames";

const PictureLoading = ({
    iconSize = 32,
    wrapperBorder = true
}) => {
    return (
        <div className={styles.pictureLoading}>
            <div className={classNames(
                styles.pictureLoading__wrapperBorder,
                { [styles.pictureLoading__wrapperBorderNone]: !wrapperBorder }
            )}>
                <Logo
                    className={styles.pictureLoading__spinner}
                    style={{
                        width: iconSize,
                        height: iconSize
                    }}
                />
            </div>
        </div>
    );
};

export default PictureLoading