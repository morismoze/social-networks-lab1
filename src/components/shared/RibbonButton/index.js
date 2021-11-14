import React from 'react';

import styles from './RibbonButton.module.scss';
import classNames from "classnames";

const RibbonButton = ({
    onClick,
    active
}) => {
    return (
        <div
            className={classNames(
                styles.ribbon,
                { [styles['ribbon--active']]: active }
            )}
            onClick={onClick}
        >
            <span className={styles.ribbon__text}>+</span>
        </div>
    );
};

export default RibbonButton;