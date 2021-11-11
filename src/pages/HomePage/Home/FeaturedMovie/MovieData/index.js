import React from 'react';

import MovieRating from "../MovieRating";
import WithDataParagraphLayoutWrapper from "../withDataParagraphLayoutWrapper";
import styles from './MovieData.module.scss';

const MovieData = ({
    name,
    rating,
    genres,
    synopsys
}) => {
    return (
        <div className={styles.data}>
            <span className={styles.data__name}>{name}</span>
            <p className={styles.data__synopsys}>{synopsys}</p>
            <MovieRating rating={rating}/>
        </div>
    );
}

export default MovieData;