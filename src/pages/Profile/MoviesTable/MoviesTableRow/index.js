import React, { useRef } from 'react';

import { Link } from "react-router-dom";
import { CircularProgress, Fade } from "@mui/material";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import MovieCardRating from "../../../../components/shared/MovieCard/MovieCardRating";
import AddButton from "../../../../components/shared/userActivity/AddButton";
import Image from "../../../../components/shared/Image";
import HeartButton from "../../../../components/shared/userActivity/HeartButton";
import * as TableMoviesSelectors from '../../redux/TableMovies.selectors';
import * as UserSelectors from '../../../../store/shared/user/User.selectors';
import { actions as userActions } from "../../../../store/shared/user/User.actions";
import { actions as tableMoviesActions } from '../../redux/TableMovies.actions';
import { useIntersection } from "../../../../hooks/useIntersection";
import { extractYearFromReleaseDate } from "../../../../util/string";
import Fallback from '../../../../assets/images/table-movie-poster-fallback.png';
import styles from './MoviesTableRow.module.scss';

const MoviesTableRow = ({
    type,
    id,
    moviesIds
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
            timeout={500}
        >
            <tr
                ref={rowRef}
                className={styles.moviesTableRow}
            >
                {movie ? (
                    <>
                        <td className={styles.moviesTableRow__cell}>
                            <Image
                                src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                                fallback={Fallback}
                                className={styles.moviesTableRow__poster}
                            />
                        </td>
                        <td className={styles.moviesTableRow__cell}>
                            <Link
                                to={`/movies/${id}/details`}
                                className={classNames(
                                    styles.moviesTableRow__textCell,
                                    styles.moviesTableRow__titleCell
                                )}
                            >
                                {movie.title}
                            </Link>
                        </td>
                        <td className={styles.moviesTableRow__cell}>
                            <span>
                                {movie.release_date ? (
                                    extractYearFromReleaseDate(movie.release_date)
                                ) : (
                                    '--'
                                )}
                            </span>
                        </td>
                        <td className={styles.moviesTableRow__cell}>
                            <span className={styles.moviesTableRow__genresCell}>
                                {movie.genres.length > 0 ? (
                                    movie.genres.map((genre, index) => (
                                        <span key={index}>
                                            {genre.name}{index < movie.genres.length - 1 ? ',' : ''}&nbsp;
                                        </span>
                                    ))
                                ) : (
                                    '--'
                                )}
                            </span>
                        </td>
                        <td className={styles.moviesTableRow__cell}>
                            <span>
                                <MovieCardRating rating={movie.vote_average}/>
                            </span>
                        </td>
                        <td className={styles.moviesTableRow__cell}>
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
                        </td>
                    </>
                ) : (
                    <td
                        className={classNames(
                            styles.moviesTableRow__cell,
                            styles.moviesTableRow__loaderCell
                        )}
                        colSpan='6'
                    >
                        <CircularProgress />
                    </td>
                )}
            </tr>
        </Fade>
    );
};

export default MoviesTableRow;