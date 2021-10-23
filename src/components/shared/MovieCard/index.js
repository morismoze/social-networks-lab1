import React from 'react';

import { Link } from "react-router-dom";
import { AiOutlineCalendar } from "react-icons/all";

import MovieCardRating from "./MovieCardRating";
import LazyLoadedImage from "../LazyLoadedImage";
import styles from './MovieCard.module.scss';

const MovieCard = ({
    name,
    posterUrl,
    rating,
    releaseYear,
    adult,
    index
}) => {
    return (
        <div className={styles.movieCard}>
            <Link to={'/negdje'} className={styles.movieCard__link}>
                <LazyLoadedImage
                    src={posterUrl}
                    alt={name}
                    index={index}
                    className={styles.movieCard__poster}
                />
                <span
                    className={styles.movieCard__name}
                    title={name}
                >
                    {name}
                </span>
            </Link>
            <div className={styles.movieCard__dataWrapper}>
                <div className={styles.movieCard__yearAdultWrapper}>
                    <div className={styles.movieCard__yearWrapper}>
                        <AiOutlineCalendar
                            size={25}
                            className={styles.movieCard__yearIcon}
                        />
                        <span className={styles.movieCard__year}>
                            {releaseYear}
                        </span>
                    </div>
                    {adult &&
                        <span className={styles.movieCard__adult}>18+</span>
                    }
                </div>
                <MovieCardRating rating={rating}/>
            </div>
        </div>
    );
};

export default MovieCard;