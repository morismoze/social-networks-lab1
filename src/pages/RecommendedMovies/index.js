import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/shared/Header";
import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import MovieCard from "../../components/shared/MovieCard";
import CustomPagination from "../../components/shared/CustomPagination";
import * as RecommendedMoviesSelectors from './redux/RecommendedMovies.selectors';
import * as UserSelectors from '../../store/shared/user/User.selectors';
import { actions as recommendedMoviesActions} from './redux/RecommendedMovies.actions';
import { actions as userActivityActions} from '../../store/shared/userActivity/UserActivity.actions';
import styles from './RecommendedMovies.module.scss';

const RecommendedPage = () => {
    const [ page, setPage ] = useState(1);

    const dispatch = useDispatch();

    const userId = useSelector(UserSelectors.id);

    const recommendedMoviesStatus = useSelector(RecommendedMoviesSelectors.status);
    const recommendedMovies = useSelector(RecommendedMoviesSelectors.movies);

    const handleOnPageChange = (event, value) => {
        // @todo: call BE
        setPage(value);
    };

    useEffect(() => {
        if (userId) {
            dispatch(recommendedMoviesActions.getMovies());
            dispatch(userActivityActions.getLikedMovies(userId));
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
                                width={789}
                                height={439}
                                posterUrl={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                                adult={movie.adult}
                                index={index + 1}
                                id={movie.id}
                                key={movie.id}
                            />
                        ))
                    }
                </div>
            </WithLayoutWrapper>
            {recommendedMoviesStatus === 'success' &&
                <CustomPagination
                    count={20}
                    page={page}
                    onChange={handleOnPageChange}
                />
            }
        </>
    );
};

export default RecommendedPage;