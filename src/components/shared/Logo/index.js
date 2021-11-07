import React from 'react';

import logoIcon from "../../../assets/images/logo-icon.svg";
import styles from './Logo.module.scss';

const Logo = ({
    horizontal = true,
}) => {
    return (
        <div
            className={styles.logo}
            style={{
                flexDirection: horizontal ? 'row' : 'column'
            }}
        >
            <img
                src={logoIcon}
                alt={'Logo icon, movie ticket'}
                className={styles.logo__icon}
            />
            <span className={styles.logo__name}>
                  recommend.me
            </span>
        </div>
    );
};

export default Logo;