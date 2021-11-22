import React from 'react';

import styles from './Genre.module.scss';

const Genre = ({
    name
}) => {
    return (
        <div className={styles.genre}>
            <span className={styles.genre__name}>{name}</span>
        </div>
    );
};

export default Genre;