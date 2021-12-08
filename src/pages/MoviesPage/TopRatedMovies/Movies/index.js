import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import MoviesGrid from "../../MoviesGrid";
import * as TopRatedSelectors from './redux/TopRatedMovies.selectors';
import { actions as topRatedMoviesActions } from "./redux/TopRatedMovies.actions";
import * as FilterSelectors from '../../redux/Filter.selectors';

const Movies = () => {
    const dispatch = useDispatch();

    const status = useSelector(TopRatedSelectors.status);
    const movies = useSelector(TopRatedSelectors.movies);
    const pages = useSelector(TopRatedSelectors.pages);

    const genreFilters = useSelector(FilterSelectors.genreFilters);
    const statusFilters = useSelector(FilterSelectors.statusFilters);

    const getMovies = (page) => {
        dispatch(topRatedMoviesActions.getMoviesAndToggleLoader({
            page,
            genreFilters,
            statusFilters
        }));
    };

    return (
        <MoviesGrid
            getMovies={getMovies}
            status={status}
            movies={movies}
            pages={pages}
        />
    );
};

export default Movies;