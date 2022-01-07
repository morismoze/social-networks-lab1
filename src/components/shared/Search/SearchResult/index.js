import React from 'react';

import { Link } from "react-router-dom";

import styles from './SearchResult.module.scss';

const SearchResult = ({
    id,
    posterSrc,
    title,
    onClick
}) => {
    return (
        <Link
            to={`/${id}/details`}
            onClick={onClick}
            className={styles.container}
        >
            <img
                src={posterSrc}
                alt={title}
                className={styles.container__poster}
            />
            <span className={styles.container__title}>{title}</span>
        </Link>
    );
};

export default SearchResult;