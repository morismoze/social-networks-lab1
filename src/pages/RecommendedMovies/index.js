import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/shared/Header";
import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import MovieCard from "../../components/shared/MovieCard";
import { actions as recommendedMoviesActions} from './redux/RecommendedMovies.actions';
import * as RecommendedMoviesSelectors from './redux/RecommendedMovies.selectors';
import * as UserSelectors from '../../store/shared/user/User.selectors';
import styles from './RecommendedMovies.module.scss';

const RecommendedPage = () => {
    const dispatch = useDispatch();

    const userId = useSelector(UserSelectors.id);

    const recommendedMoviesStatus = useSelector(RecommendedMoviesSelectors.status);
    const recommendedMovies = useSelector(RecommendedMoviesSelectors.movies);

    useEffect(() => {
        if (userId) {
            dispatch(recommendedMoviesActions.getMovies(userId));
        }
    }, [userId]);

    return (
        <>
            <Header/>
            <WithLayoutWrapper className={styles.recommendedMoviesContainer}>
                <div className={styles.recommendedMoviesContainer__wrapper}>
                    {recommendedMoviesStatus === 'success' &&
                        recommendedMovies.map((movie, index) => (
                            <MovieCard
                                name={movie.title}
                                rating={movie.vote_average}
                                releaseDate={movie.release_date}
                                aspectRatio={789/439}
                                posterUrl={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
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