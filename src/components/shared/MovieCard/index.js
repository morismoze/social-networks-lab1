import React from 'react';

import { Link } from "react-router-dom";

import MovieCardRating from "./MovieCardRating";
import LazyLoadedImage from "../LazyLoadedImage";
import styles from './MovieCard.module.scss';

const MovieCard = ({
    name,
    pictureUrl,
    rating,
    releaseYear,
    adult,
    index
}) => {
    return (
        <div className={styles.movieCard}>
            <Link to={'/negdje'} className={styles.movieCard__link}>
                <LazyLoadedImage
                    src={pictureUrl}
                    alt={name}
                    index={index}
                />
            </Link>
            <div className={styles.movieCard__dataWrapper}>
                <span
                    className={styles.movieCard__name}
                    title={name}
                >
                    {name ? (
                        name
                    ) : (
                        '--'
                    )}
                </span>
                <div className={styles.movieCard__yearRatingWrapper}>
                    <div className={styles.movieCard__yearAdultWrapper}>
                        <span className={styles.movieCard__year}>
                        {releaseYear ? (
                            releaseYear
                        ) : (
                            '--'
                        )}
                    </span>
                        {adult &&
                            <>
                                <span className={styles.movieCard__bullet}/>
                                <span className={styles.movieCard__adult}>18+</span>
                            </>
                        }
                    </div>
                    <MovieCardRating rating={rating}/>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;