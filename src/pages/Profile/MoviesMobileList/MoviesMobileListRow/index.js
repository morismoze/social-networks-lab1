import React, { useRef } from 'react';

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Fade } from "@mui/material";

import AddButton from "../../../../components/shared/userActivity/AddButton";
import HeartButton from "../../../../components/shared/userActivity/HeartButton";
import Image from "../../../../components/shared/Image";
import * as TableMoviesSelectors from "../../redux/TableMovies.selectors";
import * as UserSelectors from "../../../../store/shared/user/User.selectors";
import { useIntersection } from "../../../../hooks/useIntersection";
import { actions as tableMoviesActions } from "../../redux/TableMovies.actions";
import { actions as userActions } from "../../../../store/shared/user/User.actions";
import Fallback from "../../../../assets/images/table-movie-poster-fallback.png";
import styles from './MoviesMobileListRow.module.scss';

const MoviesMobileListRow = ({
    type,
    moviesIds,
    id
}) => {
    const rowRef = useRef();

    const dispatch = useDispatch();

    const movie = useSelector(TableMoviesSelectors.readMovieDetails(id));

    const userId = useSelector(UserSelectors.id);

    useIntersection(rowRef, () => {
        dispatch(tableMoviesActions.getMovie(id));
    });

    const handleRemoveFromWatchlist = () => {
        dispatch(userActions.removeFromWatchlist({ userId, movieId: id }));
    };

    const handleRemoveFromLikedList = () => {
        dispatch(userActions.removeFromLikes({ userId, movieId: id }));
    };

    return (
        <Fade
            in={moviesIds.includes(id)}
            timeout={{
                enter: 500,
                exit: 1000,
            }}
            unmountOnExit
        >
            <div
                ref={rowRef}
                className={styles.moviesMobileListRow}
            >
                {movie ? (
                    <>
                        <Image
                            src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                            fallback={Fallback}
                            className={styles.moviesMobileListRow__poster}
                        />
                        <Link
                            to={`/movies/${id}/details`}
                            className={styles.moviesMobileListRow__movieTitle}
                        >
                            {movie.title}
                        </Link>
                        {type === 'watch-list' ? (
                            <AddButton
                                onClick={handleRemoveFromWatchlist}
                                active={true}
                            />
                        ) : (
                            <HeartButton
                                onClick={handleRemoveFromLikedList}
                                active={true}
                            />
                        )}
                    </>
                ) : (
                    <div className={styles.moviesMobileListRow__loaderWrapper}>
                        <CircularProgress />
                    </div>
                )}
            </div>
        </Fade>
    );
};

export default MoviesMobileListRow;