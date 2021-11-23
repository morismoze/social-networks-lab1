import React from 'react';

import classNames from "classnames";

import styles from './Hamburger.module.scss';

const Hamburger = ({
    isOpen,
    toggleMenu
}) => {
    return (
        <div
            onClick={toggleMenu}
            className={classNames(
                styles.hamburger,
                { [styles['hamburger--active']]: isOpen }
            )}
        >
            <div className={styles.hamburger__pillar}/>
            <div className={styles.hamburger__pillar}/>
            <div className={styles.hamburger__pillar}/>
        </div>
    );
};

export default Hamburger;