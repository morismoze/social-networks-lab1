import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import MoviesGrid from "../../MoviesGrid";
import * as PopularMoviesSelectors from './redux/PopularMovies.selectors';
import { actions as popularMoviesActions} from './redux/PopularMovies.actions';

const Movies = () => {
    const dispatch = useDispatch();

    const recommendedMoviesStatus = useSelector(PopularMoviesSelectors.status);
    const recommendedMovies = useSelector(PopularMoviesSelectors.movies);

    const getMovies = (page) => {
        dispatch(popularMoviesActions.getMoviesAndToggleLoader(page));
    };

    return (
        <MoviesGrid
            getMovies={getMovies}
            status={recommendedMoviesStatus}
            movies={recommendedMovies}
        />
    );
};

export default Movies;