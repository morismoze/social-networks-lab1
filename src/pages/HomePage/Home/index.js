import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import CustomCarousel from "../CustomCarousel";
import Footer from "../../../components/shared/Footer";
import FeaturedMovie from "../FeaturedMovie";
import WithLayoutWrapper from "../../../components/shared/withLayoutWrapper";
import SectionLayoutWrapper from "../SectionLayoutWrapper";
import MovieCard from "../MovieCard";
import * as FeaturedMoviesSelectors from '../redux/FeaturedMovies/FeaturedMovies.selectors';
import { actions as featuredMoviesActions } from '../redux/FeaturedMovies/FeaturedMovies.actions';
import * as MoviesInTheatersSelectors from '../redux/MoviesInTheaters/MoviesInTheaters.selectors';
import { actions as moviesInTheatersSelectorsActions } from '../redux/MoviesInTheaters/MoviesInTheaters.actions';
import * as UserSelectors from '../../../store/shared/user/User.selectors';
import * as RegionMoviesSelectors from '../redux/RegionMovies/RegionMovies.selectors';
import { actions as regionMoviesActions } from '../redux/RegionMovies/RegionMovies.actions';
import styles from './Home.module.scss';

const NUMBER_OF_CAROUSEL_ITEMS = 5;

const Home = () => {
    const dispatch = useDispatch();

    const featuredMoviesStatus = useSelector(FeaturedMoviesSelectors.status);
    const featuredMovies = useSelector(FeaturedMoviesSelectors.movies);

    const moviesInTheatersStatus = useSelector(MoviesInTheatersSelectors.status);
    const moviesInTheaters = useSelector(MoviesInTheatersSelectors.movies);

    const regionMoviesStatus = useSelector(RegionMoviesSelectors.status);
    const regionMovies = useSelector(RegionMoviesSelectors.movies);

    const userCountry = useSelector(UserSelectors.country);

    useEffect(() => {
        dispatch(featuredMoviesActions.getMoviesAndToggleLoader(NUMBER_OF_CAROUSEL_ITEMS));
        dispatch(moviesInTheatersSelectorsActions.getMoviesAndToggleLoader(20));
    }, []);

    useEffect(() => {
        if (userCountry) {
            dispatch(regionMoviesActions.getMoviesAndToggleLoader({
                country: userCountry.code,
                limit: 20
            }));
        }
    }, [userCountry]);

    return (
        <WithLayoutWrapper>
            <div className={styles.home}>
                <div className={styles.home__carouselWrapper}>
                    <CustomCarousel
                        items={featuredMoviesStatus === 'success' &&
                            featuredMovies.map((movie, index) => (<FeaturedMovie movie={movie} key={index}/>))
                        }
                        autoplay
                        interval={8000}
                    />
                </div>
                <SectionLayoutWrapper title={'In Theatres'}>
                    <div className={styles.home__sectionMoviesWrapper}>
                        {moviesInTheatersStatus === 'success' &&
                            moviesInTheaters.map((movie) => <MovieCard movie={movie}/>)
                        }
                    </div>
                </SectionLayoutWrapper>
                <SectionLayoutWrapper
                    title={`Top Picks in ${userCountry && userCountry.country}`}
                    mode={'light'}
                    className={styles.home__lightSection}
                >
                    <div className={styles.home__sectionMoviesWrapper}>
                        {regionMoviesStatus === 'success' &&
                            regionMovies.map((movie) => <MovieCard movie={movie} mode={'dark'}/>)
                        }
                    </div>
                </SectionLayoutWrapper>
                <Footer/>
            </div>
        </WithLayoutWrapper>
    );
};

export default Home;