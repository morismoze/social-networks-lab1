import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/shared/Header";
import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import TopRatedMovie from "./TopRatedMovie";
import Carousel from "../../components/shared/Carousel";
import * as TopRatedSelectors from './redux/TopRatedMovies.selectors';
import * as UserSelectors from "../../store/shared/user/User.selectors";
import { actions as topRatedMoviesActions } from "./redux/TopRatedMovies.actions";
import styles from './TopRatedMovies.module.scss';

const TopRatedPage = () => {
    const dispatch = useDispatch();

    const topRatedMovies = useSelector(TopRatedSelectors.movies);
    const topRatedMoviesStatus = useSelector(TopRatedSelectors.status);

    const userId = useSelector(UserSelectors.id);

    useEffect(() => {
        if (userId) {
            dispatch(topRatedMoviesActions.getMoviesAndToggleLoader(userId));
        }
    }, [userId]);

    return (
        <>
            <Header/>
            <WithLayoutWrapper className={styles.topRatedMovies}>
                <div className={styles.topRatedMovies__carousel}>
                   {topRatedMoviesStatus === 'success' &&
                        <Carousel
                            data={
                                topRatedMovies.map((movie, index) => (
                                    <TopRatedMovie
                                        name={movie.title}
                                        releaseDate={movie.release_date}
                                        posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        duration={{hour: '1', minutes: '49'}}
                                        cast={[]}
                                        synopsys={movie.overview}
                                        rating={movie.vote_average}
                                        genres={movie.genre_ids}
                                        key={index}
                                    />
                                ))
                            }
                            autoplay={false}
                        />
                   }
                </div>
            </WithLayoutWrapper>
        </>
    );
};

export default TopRatedPage;