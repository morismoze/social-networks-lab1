import React from 'react';

import { useWindowSize } from "../../../../hooks/useWindowSize";
import styles from './Stat.module.scss';

const Stat = ({
    name,
    value
}) => {
    const { width } = useWindowSize();

    if (name === 'Revenue' && width < 768) {
        return null;
    }

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