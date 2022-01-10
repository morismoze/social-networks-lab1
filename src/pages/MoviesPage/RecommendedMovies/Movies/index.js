import React, { useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import MoviesGrid from "../../MoviesGrid";
import * as RecommendedMoviesSelectors from './redux/RecommendedMovies.selectors';
import * as FilterSelectors from "../../redux/Filter.selectors";
import { actions as recommendedMoviesActions} from './redux/RecommendedMovies.actions';
import useScrollToTop from "../../../../hooks/useScrollToTop";

const MAX_NO_OF_MOVIES_PER_PAGE = 22;

const Movies = () => {
    const dispatch = useDispatch();

    const location = useLocation();

    const [ moviesCopy, setMoviesCopy ] = useState([]);

    const recommendedMoviesStatus = useSelector(RecommendedMoviesSelectors.status);
    const recommendedMovies = useSelector(RecommendedMoviesSelectors.movies);
    const pages = useSelector(RecommendedMoviesSelectors.pages);

    const genreFilters = useSelector(FilterSelectors.genreFilters);
    const statusFilters = useSelector(FilterSelectors.statusFilters);

    const getMovies = async (page) => {
        if (recommendedMovies.length === 0 && recommendedMoviesStatus === 'idle') {
            await dispatch(recommendedMoviesActions.getMoviesAndToggleLoader());
        }

        setMoviesCopy([...recommendedMovies].slice((MAX_NO_OF_MOVIES_PER_PAGE * (page - 1)), MAX_NO_OF_MOVIES_PER_PAGE * page));
    };

    useScrollToTop(location);

    return (
        <MoviesGrid
            getMovies={getMovies}
            status={recommendedMoviesStatus}
            movies={moviesCopy.length !== 0 ? moviesCopy : [...recommendedMovies].slice(0, MAX_NO_OF_MOVIES_PER_PAGE)}
            pages={pages}
        />
    );
};

export default Movies;