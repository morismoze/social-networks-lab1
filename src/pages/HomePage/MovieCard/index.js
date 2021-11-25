import React from 'react';

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { useSnackbar } from "notistack";

import LazyLoadedImage from "../../../components/shared/LazyLoadedImage";
import MovieCardRating from "../../../components/shared/MovieCard/MovieCardRating";
import RibbonButton from "../../../components/shared/userActivity/RibbonButton";
import * as UserSelectors from "../../../store/shared/user/User.selectors";
import { actions as userActions } from "../../../store/shared/user/User.actions";
import Fallback from '../../../assets/images/poster-fallback.png';
import styles from './MovieCard.module.scss';

const MovieCard = ({
    movie,
    mode = 'light'
}) => {
    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();

    const userId = useSelector(UserSelectors.id);

    const watchlist = useSelector(UserSelectors.watchlist);

    const isAddedToWatchlist = watchlist.find(movieId => movieId === movie.id);

    const handleAddToWatchlist = () => {
        if (!userId) {
            enqueueSnackbar('You have to be logged in order to add a movie to the watchlist.', {
                variant: 'error'
            });
        } else {
            if (isAddedToWatchlist) {
                dispatch(userActions.removeFromWatchlist({ userId, movieId: movie.id }));
            } else {
                dispatch(userActions.addToWatchlist({ userId, movieId: movie.id }));
            }
        }
    };

    return (
        <div className={styles.movieCard}>
            <RibbonButton
                onClick={handleAddToWatchlist}
                active={isAddedToWatchlist}
            />
            <Link
                to={`/${movie.id}/details`}
                className={styles.movieCard__link}
            >
                <LazyLoadedImage
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : null}
                    fallback={Fallback}
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
    );
};

export default MovieCard;