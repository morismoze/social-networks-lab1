import React from 'react';

import { Link } from "react-router-dom";

import styles from './MovieCard.module.scss';

const MovieCard = ({
    name,
    pictureUrl,
    rating,
    releaseYear
}) => {
    return (
        <div className={styles.movieCard}>
            <Link to={'/negdje'} className={styles.movieCard__link}>
                <img
                    src={pictureUrl}
                    alt={name}
                    className={styles.movieCard__img}
                />
            </Link>
            <div className={styles.movieCard__dataWrapper}>
                <span>{name}</span>
                <div>
                    <span>{releaseYear}</span>
                    <MovieCardRating rating={rating}/>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;