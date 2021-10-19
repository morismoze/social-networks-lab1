import React from 'react';

import { Link } from "react-router-dom";
import { Fade } from "@mui/material";

import MovieCardRating from "./MovieCardRating";
import styles from './MovieCard.module.scss';

const MovieCard = ({
    name,
    pictureUrl,
    rating,
    releaseYear,
    index
}) => {
    return (
        <Fade
            in={true}
            timeout={150 * index}
        >
            <div className={styles.movieCard}>
                <Link to={'/negdje'} className={styles.movieCard__link}>
                    <div className={styles.movieCard__imgWrapper}>
                        <img
                            src={pictureUrl}
                            alt={name}
                            loading={'lazy'}
                            className={styles.movieCard__img}
                            style={{
                                height: '100%',
                                width: '100%'
                            }}
                        />
                    </div>
                </Link>
                <div className={styles.movieCard__dataWrapper}>
                <span
                    className={styles.movieCard__name}
                    title={name}
                >
                    {name}
                </span>
                    <div className={styles.movieCard__yearRatingWrapper}>
                        <span className={styles.movieCard__year}>{releaseYear}</span>
                        <MovieCardRating rating={rating}/>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default MovieCard;