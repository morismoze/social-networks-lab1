import React from 'react';

import styles from './Stat.module.scss';

const Stat = ({
    name,
    value
}) => {
    return (
        <div className={styles.stat}>
            <span className={styles.stat__name}>
                {name}
            </span>
            <span className={styles.stat__value}>
                {value ? (value) : ('--')}
            </span>
        </div>
    );
};

export default Stat;