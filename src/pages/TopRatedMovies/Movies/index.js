import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import Footer from "../../../components/shared/Footer";
import WithLayoutWrapper from "../../../components/shared/withLayoutWrapper";
import TopRatedMovie from "./TopRatedMovie";
import Carousel from "../../../components/shared/Carousel";
import * as TopRatedSelectors from './redux/TopRatedMovies.selectors';
import { actions as topRatedMoviesActions } from "./redux/TopRatedMovies.actions";
import styles from './Movies.module.scss';

const Movies = () => {
    const dispatch = useDispatch();

    const topRatedMovies = useSelector(TopRatedSelectors.movies);
    const topRatedMoviesStatus = useSelector(TopRatedSelectors.status);

    useEffect(() => {
        dispatch(topRatedMoviesActions.getMoviesAndToggleLoader());
    }, []);

    return (
        <>
            <div className={styles.topRatedMovies}>
                {topRatedMoviesStatus === 'success' &&
                    <Carousel
                        data={
                            topRatedMovies.map((movie, index) => (
                                <TopRatedMovie
                                    name={movie.title}
                                    releaseDate={movie.release_date}
                                    backdropUrl={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
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
                <Footer/>
            </div>
        </>
    );
};

export default Movies;