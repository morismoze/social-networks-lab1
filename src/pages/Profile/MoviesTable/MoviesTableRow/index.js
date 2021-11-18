import React, { useRef } from 'react';

import {useDispatch, useSelector} from "react-redux";

import * as TableMoviesSelectors from '../../redux/TableMovies.selectors';
import { actions as tableMoviesActions } from '../../redux/TableMovies.actions';
import { useIntersection } from "../../../../hooks/useIntersection";
import styles from './MoviesTableRow.module.scss';
import {readMovieDetails} from "../../redux/TableMovies.selectors";

const MoviesTableRow = ({
    id
}) => {
    const rowRef = useRef();

    const dispatch = useDispatch();

    let movie = useSelector(TableMoviesSelectors.readMovieDetails(id));

    useIntersection(rowRef, () => {
        dispatch(tableMoviesActions.getMovie(id));
    });


    return (
        <tr
            ref={rowRef}
            className={styles.moviesTableRow}
        >
            {movie &&
                <td className={styles.moviesTableRow__cell}>
                    {movie.title}
                </td>
            }
        </tr>
    );
};

export default MoviesTableRow;