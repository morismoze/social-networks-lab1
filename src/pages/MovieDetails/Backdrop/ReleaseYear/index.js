import React from 'react';

import styles from './ReleaseYear.module.scss';

const ReleaseYear = ({
    year
}) => {
    if (!year) {
        return null;
    }

    return (
        <div className={styles.releaseYear}>
            <span className={styles.releaseYear__year}>{year}</span>
        </div>
    );
};

export default ReleaseYear;