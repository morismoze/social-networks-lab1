import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import CustomCarousel from "../CustomCarousel";
import Footer from "../../../components/shared/Footer";
import FeaturedMovie from "../FeaturedMovie";
import WithLayoutWrapper from "../../../components/shared/withLayoutWrapper";
import SectionLayoutWrapper from "../SectionLayoutWrapper";
import MovieCard from "../MovieCard";
import LatestMovie from "../LatestMovie";
import * as FeaturedMoviesSelectors from '../redux/FeaturedMovies/FeaturedMovies.selectors';
import { actions as featuredMoviesActions } from '../redux/FeaturedMovies/FeaturedMovies.actions';
import * as MoviesInTheatersSelectors from '../redux/MoviesInTheaters/MoviesInTheaters.selectors';
import { actions as moviesInTheatersSelectorsActions } from '../redux/MoviesInTheaters/MoviesInTheaters.actions';
import * as UserSelectors from '../../../store/shared/user/User.selectors';
import * as RegionMoviesSelectors from '../redux/RegionMovies/RegionMovies.selectors';
import { actions as regionMoviesActions } from '../redux/RegionMovies/RegionMovies.actions';
import * as LatestMovieSelectors from '../redux/LatestMovie/LatestMovie.selectors';
import { actions as latestMovieActions } from '../redux/LatestMovie/LatestMovie.actions';
import { toggleLoading } from "../../../store/shared/navigation/Navigation.slice";
import styles from './Home.module.scss';
import {region} from "../redux/RegionMovies/RegionMovies.selectors";

const NUMBER_OF_CAROUSEL_ITEMS = 5;

const Home = () => {
    const dispatch = useDispatch();

    const featuredMoviesStatus = useSelector(FeaturedMoviesSelectors.status);
    const featuredMovies = useSelector(FeaturedMoviesSelectors.movies);

    const moviesInTheatersStatus = useSelector(MoviesInTheatersSelectors.status);
    const moviesInTheaters = useSelector(MoviesInTheatersSelectors.movies);

    const regionMoviesStatus = useSelector(RegionMoviesSelectors.status);
    const regionMovies = useSelector(RegionMoviesSelectors.movies);
    const region = useSelector(RegionMoviesSelectors.region);

    const latestMovieStatus = useSelector(LatestMovieSelectors.status);
    const latestMovie = useSelector(LatestMovieSelectors.movie);

    const userLocation = useSelector(UserSelectors.location);

    useEffect(() => {
        dispatch(toggleLoading(true));
        dispatch(featuredMoviesActions.getMovies(NUMBER_OF_CAROUSEL_ITEMS));
        dispatch(moviesInTheatersSelectorsActions.getMovies(20));
        dispatch(latestMovieActions.getMovie());
        dispatch(regionMoviesActions.getMovies({
            country: userLocation ? userLocation.country : null,
            limit: 20
        }));
        dispatch(toggleLoading(false));
    }, []);

    return (
        <WithLayoutWrapper>
            <div className={styles.home}>
                <div className={styles.home__carouselWrapper}>
                    <CustomCarousel
                        items={featuredMoviesStatus === 'success' &&
                            featuredMovies.map((movie, index) => (
                                <FeaturedMovie
                                    movie={movie}
                                    key={index}
                                />
                            )
                        )}
                        autoplay
                        interval={8000}
                    />
                </div>
                <SectionLayoutWrapper title={'In Theatres'}>
                    <div className={styles.home__sectionMoviesWrapper}>
                        {moviesInTheatersStatus === 'success' &&
                            moviesInTheaters.map((movie, index) => (
                                <MovieCard
                                    movie={movie}
                                    key={index}
                                />
                            )
                        )}
                    </div>
                </SectionLayoutWrapper>
                <SectionLayoutWrapper
                    title={`Top Picks in ${region}`}
                    mode={'light'}
                    className={styles.home__darkSection}
                >
                    <div className={styles.home__sectionMoviesWrapper}>
                        {regionMoviesStatus === 'success' &&
                            regionMovies.map((movie, index) => (
                                <MovieCard
                                    movie={movie}
                                    mode={'dark'}
                                    key={index}
                                />
                            )
                        )}
                    </div>
                </SectionLayoutWrapper>
                <SectionLayoutWrapper
                    title={'Latest movie'}
                    className={styles.home__singular}
                >
                    {latestMovieStatus === 'success' &&
                        <LatestMovie movie={latestMovie}/>
                    }
                </SectionLayoutWrapper>
                <Footer/>
            </div>
        </WithLayoutWrapper>
    );
};

export default Home;