import React from 'react';

import { AiFillStar } from "react-icons/all";

import { setFixedNumberOfDecimals } from "../../../../util/string";
import styles from './MovieCardRating.module.scss';
import classNames from "classnames";

const MovieCardRating = ({
    rating,
    mode
}) => {
    const formattedRating = setFixedNumberOfDecimals(rating);

    return (
        <div className={styles.movieCardRating}>
            <AiFillStar
                size={15}
                className={styles.movieCardRating__icon}
            />
            <span className={classNames(
                styles.movieCardRating__rating,
                { [styles['movieCardRating__rating--dark']]: mode === 'dark' }
            )}>
                {formattedRating ? (
                    formattedRating
                ) : (
                    '--'
                )}
            </span>
        </div>
    );
};

export default MovieCardRating;