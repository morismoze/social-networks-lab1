import React from 'react';

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MovieCardRating from "./MovieCardRating";
import LazyLoadedImage from "../LazyLoadedImage";
import Heart from "../reactions/Heart";
import MovieCardReleaseDate from "./MovieCardReleaseDate";
import * as UserSelectors from '../../../store/shared/user/User.selectors';
import * as UserActivitySelectors from '../../../store/shared/userActivity/UserActivity.selectors';
import { actions as userActions } from '../../../store/shared/userActivity/UserActivity.actions';
import Fallback from '../../../assets/images/movie-card-fallback.png';
import styles from './MovieCard.module.scss';

const MovieCard = ({
    id,
    name,
    posterUrl,
    width,
    height,
    rating,
    releaseDate,
    adult,
    index
}) => {
    const dispatch = useDispatch();

    const history = useHistory();

    const userId = useSelector(UserSelectors.id);

    const likedMovies = useSelector(UserActivitySelectors.likedMovies);

    const handleMovieLike = (callback) => {
        const isLiked = likedMovies.find(movieId => movieId === id);

        if (isLiked) {
            dispatch(userActions.storeUserUnlike({ userId, movieId: id }));
        } else {
            dispatch(userActions.storeUserLike({ userId, movieId: id }));
        }
    };

    return (
        <div className={styles.movieCard}>
            <Link
                to={history.location.pathname + encodeURI(`/details/${id}`)}
                className={styles.movieCard__link}
            >
                <LazyLoadedImage
                    src={posterUrl}
                    fallback={Fallback}
                    width={width}
                    height={height}
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
                    <Heart onClick={handleMovieLike} id={id}/>
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