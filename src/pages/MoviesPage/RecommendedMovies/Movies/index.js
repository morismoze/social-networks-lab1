import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import MoviesGrid from "../../MoviesGrid";
import * as RecommendedMoviesSelectors from './redux/RecommendedMovies.selectors';
import * as FilterSelectors from "../../redux/Filter.selectors";
import { actions as recommendedMoviesActions} from './redux/RecommendedMovies.actions';

const MAX_NO_OF_MOVIES_PER_PAGE = 22;

const Movies = () => {
    const dispatch = useDispatch();

    const location = useLocation();

    const [ moviesCopy, setMoviesCopy ] = useState(undefined);

    const recommendedMoviesStatus = useSelector(RecommendedMoviesSelectors.status);
    const recommendedMovies = useSelector(RecommendedMoviesSelectors.movies);
    const pages = useSelector(RecommendedMoviesSelectors.pages);

    const genreFilters = useSelector(FilterSelectors.genreFilters);
    const statusFilters = useSelector(FilterSelectors.statusFilters);

    const getMovies = (page) => {
        setMoviesCopy([...recommendedMovies].slice((MAX_NO_OF_MOVIES_PER_PAGE * (page - 1)), MAX_NO_OF_MOVIES_PER_PAGE * page));
    };

    useEffect(() => {
        document.documentElement.style = 'scroll-behavior: auto';
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        if (recommendedMovies.length === 0) {
            dispatch(recommendedMoviesActions.getMoviesAndToggleLoader());
        }
    }, []);

    if (recommendedMovies.length === 0 && recommendedMoviesStatus !== 'success') {
        return null;
    }

    return (
        <MoviesGrid
            getMovies={getMovies}
            status={recommendedMoviesStatus}
            movies={moviesCopy}
            pages={pages}
        />
    );
};

export default Movies;