import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import MoviesGrid from "../../MoviesGrid";
import * as RecommendedMoviesSelectors from './redux/RecommendedMovies.selectors';
import * as FilterSelectors from "../../redux/Filter.selectors";
import { actions as recommendedMoviesActions} from './redux/RecommendedMovies.actions';

const Movies = () => {
    const dispatch = useDispatch();

    const recommendedMoviesStatus = useSelector(RecommendedMoviesSelectors.status);
    const recommendedMovies = useSelector(RecommendedMoviesSelectors.movies);
    const pages = useSelector(RecommendedMoviesSelectors.pages);

    const genreFilters = useSelector(FilterSelectors.genreFilters);
    const statusFilters = useSelector(FilterSelectors.statusFilters);

    const getMovies = (page) => {
        dispatch(recommendedMoviesActions.getMoviesAndToggleLoader({
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