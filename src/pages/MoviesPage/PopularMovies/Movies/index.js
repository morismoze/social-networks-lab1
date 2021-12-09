import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import MoviesGrid from "../../MoviesGrid";
import * as PopularMoviesSelectors from './redux/PopularMovies.selectors';
import * as FilterSelectors from "../../redux/Filter.selectors";
import { actions as popularMoviesActions} from './redux/PopularMovies.actions';

const Movies = () => {
    const dispatch = useDispatch();

    const recommendedMoviesStatus = useSelector(PopularMoviesSelectors.status);
    const recommendedMovies = useSelector(PopularMoviesSelectors.movies);
    const pages = useSelector(PopularMoviesSelectors.pages);

    const genreFilters = useSelector(FilterSelectors.genreFilters);
    const statusFilters = useSelector(FilterSelectors.statusFilters);

    const getMovies = (page) => {
        dispatch(popularMoviesActions.getMoviesAndToggleLoader({
            page,
            genreFilters,
            statusFilters
        }));
    };

    return (
        <MoviesGrid
            getMovies={getMovies}
            status={recommendedMoviesStatus}
            movies={recommendedMovies}
            pages={pages}
        />
    );
};

export default Movies;