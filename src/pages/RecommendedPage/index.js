import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/shared/Header";
import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import Title from "../../components/shared/Title";
import MovieCard from "../../components/shared/MovieCard";
import { actions as recommendedMoviesActions} from './RecommendedMoviesData/RecommendedMoviesData.actions';
import * as RecommendedMoviesSelectors from './RecommendedMoviesData/RecommendedMoviesData.selectors';
import * as UserSelectors from '../../store/shared/user/User.selectors';
import { getYearFromReleaseDate } from "../../util/string";
import styles from './RecommendedPage.module.scss';

const RecommendedPage = () => {
    const dispatch = useDispatch();

    const userId = useSelector(UserSelectors.id);

    const recommendedMoviesStatus = useSelector(RecommendedMoviesSelectors.recommendedMoviesStatus);
    const recommendedMovies = useSelector(RecommendedMoviesSelectors.recommendedMovies);

    useEffect(() => {
        if (userId) {
            dispatch(recommendedMoviesActions.getRecommendedMovies(userId));
        }
    }, [userId]);

    return (
        <>
            <Header/>
            <WithLayoutWrapper className={styles.recommendedMoviesContainer}>
                <Title
                    title={'Recommended for You'}
                    className={styles.recommendedMoviesContainer__title}
                />
                <div className={styles.recommendedMoviesContainer__wrapper}>
                    {recommendedMoviesStatus === 'success' &&
                        recommendedMovies.map((movie, index) => (
                            <MovieCard
                                name={movie.title}
                                rating={movie.vote_average}
                                releaseYear={getYearFromReleaseDate(movie.release_date)}
                                pictureUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                adult={movie.adult}
                                index={index + 1}
                                key={index}
                            />
                        ))
                    }
                </div>
            </WithLayoutWrapper>
        </>
    );
};

export default RecommendedPage;