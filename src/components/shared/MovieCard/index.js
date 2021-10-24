import React from 'react';

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import MovieCardRating from "./MovieCardRating";
import LazyLoadedImage from "../LazyLoadedImage";
import Heart from "../reactions/Heart";
import MovieCardReleaseDate from "./MovieCardReleaseDate";
import { toggleLoading } from "../../../store/shared/navigation/Navigation.slice";
import styles from './MovieCard.module.scss';

const MovieCard = ({
    name,
    posterUrl,
    aspectRatio,
    rating,
    releaseDate,
    adult,
    index
}) => {
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(toggleLoading(true));
    };

    return (
        <div className={styles.movieCard}>
            <Link
                to={encodeURI(`/recommended/${name}`)}
                onClick={handleOnClick}
                className={styles.movieCard__link}
            >
                <LazyLoadedImage
                    src={posterUrl}
                    aspectRatio={aspectRatio}
                    alt={name}
                    index={index}
                />
                <span
                    className={styles.movieCard__name}
                    title={name}
                >
                    {name}
                </span>
            </Link>
            <div className={styles.movieCard__dataWrapper}>
                <div className={styles.movieCard__reactionsWrapper}>
                    <Heart onClick={() => console.log('ww')}/>
                    {adult &&
                        <span className={styles.movieCard__adult}>18+</span>
                    }
                </div>
                <div className={styles.movieCard__yearRatingWrapper}>
                    <MovieCardReleaseDate releaseDate={releaseDate}/>
                    <MovieCardRating rating={rating}/>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;