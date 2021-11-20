import React from 'react';

import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MovieCardRating from "./MovieCardRating";
import LazyLoadedImage from "../LazyLoadedImage";
import HeartButton from "../userActivity/HeartButton";
import MovieCardReleaseDate from "./MovieCardReleaseDate";
import * as UserSelectors from '../../../store/shared/user/User.selectors';
import { actions as userActions } from '../../../store/shared/user/User.actions';
import Fallback from '../../../assets/images/movie-card-fallback.png';
import styles from './MovieCard.module.scss';
import AddButton from "../userActivity/AddButton";

const MovieCard = ({
    movie,
    width,
    height,
    index
}) => {
    const dispatch = useDispatch();

    const location = useLocation();

    const userId = useSelector(UserSelectors.id);
    const likedMovies = useSelector(UserSelectors.likedMovies);
    const watchlist = useSelector(UserSelectors.watchlist);

    const isLiked = likedMovies.find(movieId => movieId === movie.id);


    const isAddedToWatchlist = watchlist.find(movieId => movieId === movie.id);

    const handleMovieLike = () => {
        if (isLiked) {
            dispatch(userActions.removeFromLikes({ userId, movieId: movie.id }));
        } else {
            dispatch(userActions.addToLikes({ userId, movieId: movie.id }));
        }
    };

    const handleToggleWatchlist = () => {
        if (isAddedToWatchlist) {
            dispatch(userActions.removeFromWatchlist({ userId, movieId: movie.id }));
        } else {
            dispatch(userActions.addToWatchlist({ userId, movieId: movie.id }));
        }
    };

    return (
        <div className={styles.movieCard}>
            <Link
                to={location.pathname === '/' ?
                    `${movie.id}/details`
                    :
                    `${location.pathname}/${movie.id}/details`
                }
                className={styles.movieCard__link}
            >
                <LazyLoadedImage
                    src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}` : null}
                    fallback={Fallback}
                    width={width}
                    height={height}
                    alt={movie.title}
                    index={index}
                />
                <span
                    className={styles.movieCard__name}
                    title={movie.title}
                >
                    {movie.title}
                </span>
            </Link>
            <div className={styles.movieCard__dataWrapper}>
                <div className={styles.movieCard__reactionsWrapper}>
                    <HeartButton
                        onClick={handleMovieLike}
                        active={isLiked}
                    />
                    <AddButton
                        active={isAddedToWatchlist}
                        onClick={handleToggleWatchlist}
                    />
                    {movie.adult &&
                        <span className={styles.movieCard__adult}>18+</span>
                    }
                </div>
                <div className={styles.movieCard__yearRatingWrapper}>
                    <MovieCardReleaseDate releaseDate={movie.release_date}/>
                    <MovieCardRating rating={movie.vote_average}/>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;