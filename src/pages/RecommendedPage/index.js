import React, { useEffect } from 'react';

import {useDispatch, useSelector} from "react-redux";

import Header from "../../components/shared/Header";
import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import Title from "../../components/shared/Title";
import MovieCard from "../../components/shared/MovieCard";
import { actions as popularMoviesActions} from './PopularMoviesData/PopularMoviesData.actions';
import * as popularMoviesSelectors from './PopularMoviesData/PopularMoviesData.selectors';
import { getYearFromReleaseDate } from "../../util/string";
import styles from './RecommendedPage.module.scss';

const RecommendedPage = () => {
    const dispatch = useDispatch();

    const popularMoviesStatus = useSelector(popularMoviesSelectors.popularMoviesStatus);
    const popularMovies = useSelector(popularMoviesSelectors.popularMovies);

    const Children = () => (
        <div className={styles.recommendedMoviesContainer}>
            <Title
                title={'Recommended for You'}
                className={styles.recommendedMoviesContainer__title}
            />
            {popularMoviesStatus === 'success' &&
                popularMovies.map(movie => {
                    return <MovieCard
                        name={movie.title}
                        rating={movie.vote_average}
                        releaseYear={getYearFromReleaseDate(movie.release_date)}
                        pictureUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
                })
            }
        </div>
    );

    const WithRecommendedPageLayout = WithLayoutWrapper(Children);

    useEffect(() => {
        if (popularMoviesStatus === 'idle') {
            dispatch(popularMoviesActions.getPopularMovies());
        }
    }, [dispatch]);

    return (
        <>
            <Header/>
            <WithRecommendedPageLayout/>
        </>
    );
};

export default RecommendedPage;