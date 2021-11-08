import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import MoviesGrid from "../../../components/shared/MoviesGrid";
import * as TopRatedSelectors from './redux/TopRatedMovies.selectors';
import { actions as topRatedMoviesActions } from "./redux/TopRatedMovies.actions";

const Movies = () => {
    const dispatch = useDispatch();

    const topRatedMovies = useSelector(TopRatedSelectors.movies);
    const topRatedMoviesStatus = useSelector(TopRatedSelectors.status);

    const getMovies = (page) => {
        dispatch(topRatedMoviesActions.getMoviesAndToggleLoader(page));
    };

    return (
        <MoviesGrid
            getMovies={getMovies}
            status={topRatedMoviesStatus}
            movies={topRatedMovies}
        />
    );
};

export default Movies;