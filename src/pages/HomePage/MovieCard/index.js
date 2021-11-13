import React from 'react';

import { Link } from "react-router-dom";

import LazyLoadedImage from "../../../components/shared/LazyLoadedImage";
import MovieCardRating from "../../../components/shared/MovieCard/MovieCardRating";
import styles from './MovieCard.module.scss';
import classNames from "classnames";

const MovieCard = ({
    movie,
    mode = 'light'
}) => {
    return (
        <div className={styles.movieCard}>
            <div className={styles.movieCard}>
                <Link
                    to={`/${movie.id}/details`}
                    className={styles.movieCard__link}
                >
                    <LazyLoadedImage
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={movie.title}
                        width={300}
                        height={450}
                    />
                </Link>
                <span
                    title={movie.title}
                    className={classNames(
                        styles.movieCard__name,
                        { [styles['movieCard__name--dark']]: mode === 'dark' }
                    )}
                >
                    {movie.title}
                </span>
                <div className={styles.movieCard__footer}>
                    <MovieCardRating
                        rating={movie.vote_average}
                        mode={mode}
                    />
                </div>
            </div>
        </div>
    );
};

export default MovieCard;