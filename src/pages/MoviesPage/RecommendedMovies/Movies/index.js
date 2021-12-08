import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import MoviesGrid from "../../MoviesGrid";
import * as RecommendedMoviesSelectors from './redux/RecommendedMovies.selectors';
import { actions as recommendedMoviesActions} from './redux/RecommendedMovies.actions';

const Movies = () => {
    const dispatch = useDispatch();

    const recommendedMoviesStatus = useSelector(RecommendedMoviesSelectors.status);
    const recommendedMovies = useSelector(RecommendedMoviesSelectors.movies);

    const getMovies = (page) => {
        dispatch(recommendedMoviesActions.getMoviesAndToggleLoader(page));
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