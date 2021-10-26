import React from 'react';

import styles from './Poster.module.scss';

const Poster = ({
    src,
    alt
}) => {
    return (
        <img
            src={src}
            alt={alt}
            className={styles.poster}
        />
    );
};

export default Poster