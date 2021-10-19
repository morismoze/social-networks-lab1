import React from 'react';

import { AiFillStar } from "react-icons/all";

import styles from './MovieCardRating.module.scss';

const MovieCardRating = ({
    rating
}) => {
    return (
        <div className={styles.movieCardRating}>
            <AiFillStar
                size={15}
                className={styles.movieCardRating__icon}
            />
            <span className={styles.movieCardRating__rating}>
                {rating}
            </span>
        </div>
    );
};

export default MovieCardRating;