import React from 'react';

import logoIcon from "../../../assets/images/logo-icon.svg";
import styles from './Logo.module.scss';

const Logo = ({
    horizontal = true,
}) => {
    return (
        <div className={styles.logo}>
            <img
                src={logoIcon}
                alt={'Logo icon, movie ticket'}
                className={styles.logo__icon}
                style={{
                    flexDirection: horizontal ? 'row' : 'column'
                }}
            />
            <span className={styles.logo__name}>
                  recommend.me
            </span>
        </div>
    );
};

export default Logo;