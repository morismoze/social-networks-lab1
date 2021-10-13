import React from 'react';

import { getReleaseDateParts } from "../../../../util/date";
import styles from './MovieReleaseDate.module.scss';

const MovieReleaseDate = ({
    releaseDate
}) => {
    const dateParts = getReleaseDateParts(releaseDate);

    return (
        <div className={styles.releaseDate}>
            <span className={styles.releaseDate__day}>{dateParts.day}</span>
            <hr className={styles.releaseDate__line}/>
            <div className={styles.releaseDate__monthYearWrapper}>
                <span className={styles.releaseDate__month}>{dateParts.month}</span>
                <span className={styles.releaseDate__year}>{dateParts.year}</span>
            </div>
        </div>
    );
};

export default MovieReleaseDate;