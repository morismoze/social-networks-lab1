import React from 'react';

import { AiFillStar } from "react-icons/all";

import { setFixedNumberOfDecimals } from "../../../../util/string";
import styles from './MovieCardRating.module.scss';

const MovieCardRating = ({
    rating
}) => {
    const formattedRating = setFixedNumberOfDecimals(rating);

    return (
        <div className={styles.movieCardRating}>
            <AiFillStar
                size={15}
                className={styles.movieCardRating__icon}
            />
            <span className={styles.movieCardRating__rating}>
                {formattedRating ? (
                    formattedRating
                ) : (
                    '-'
                )}
            </span>
        </div>
    );
};

export default MovieCardRating;