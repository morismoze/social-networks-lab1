import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import CustomCarousel from "../CustomCarousel";
import GenreCard from "../../../components/shared/GenreCard";
import Footer from "../../../components/shared/Footer";
import FeaturedMovie from "../FeaturedMovie";
import WithLayoutWrapper from "../../../components/shared/withLayoutWrapper";
import SectionLayoutWrapper from "../SectionLayoutWrapper";
import MovieCard from "../MovieCard";
import TopRevenueMovie from "../TopRevenueMovie";
import SlateCard from "../SlateCard";
import ShowCard from "../ShowCard";
import * as UserSelectors from '../../../store/shared/user/User.selectors';
import * as MovieDataListSelectors from '../../../store/shared/movie/DataList.selectors';
import { actions as movieDataListActions } from '../../../store/shared/movie/DataList.actions';
import * as FeaturedMoviesSelectors from '../redux/FeaturedMovies/FeaturedMovies.selectors';
import { actions as featuredMoviesActions } from '../redux/FeaturedMovies/FeaturedMovies.actions';
import * as MoviesInTheatersSelectors from '../redux/MoviesInTheaters/MoviesInTheaters.selectors';
import { actions as moviesInTheatersSelectorsActions } from '../redux/MoviesInTheaters/MoviesInTheaters.actions';
import * as RegionMoviesSelectors from '../redux/RegionMovies/RegionMovies.selectors';
import { actions as regionMoviesActions } from '../redux/RegionMovies/RegionMovies.actions';
import * as TopRevenueMoviesSelectors from '../redux/TopRevenueMovies/TopRevenueMovies.selectors';
import { actions as topRevenueMoviesActions } from '../redux/TopRevenueMovies/TopRevenueMovies.actions';
import * as MostVisitedMoviesSelectors from '../redux/MostVisitedMovies/MostVisitedMovies.selectors';
import { actions as mostVisitedMoviesActions } from '../redux/MostVisitedMovies/MostVisitedMovies.actions';
import * as PopularShowsSelectors from '../redux/PopularShows/PopularShows.selectors';
import { actions as popularShowsActions } from '../redux/PopularShows/PopularShows.actions';
import styles from './Home.module.scss';

const NUMBER_OF_CAROUSEL_ITEMS = 5;

const Home = () => {
    const dispatch = useDispatch();

    const userId = useSelector(UserSelectors.id);

    const genresStatus = useSelector(MovieDataListSelectors.status);
    const { genres } = useSelector(MovieDataListSelectors.list);

    const featuredMoviesStatus = useSelector(FeaturedMoviesSelectors.status);
    const featuredMovies = useSelector(FeaturedMoviesSelectors.movies);

    const moviesInTheatersStatus = useSelector(MoviesInTheatersSelectors.status);
    const moviesInTheaters = useSelector(MoviesInTheatersSelectors.movies);

    const regionMoviesStatus = useSelector(RegionMoviesSelectors.status);
    const regionMovies = useSelector(RegionMoviesSelectors.movies);
    const region = useSelector(RegionMoviesSelectors.region);

    const topRevenueMoviesStatus = useSelector(TopRevenueMoviesSelectors.status);
    const topRevenueMovies = useSelector(TopRevenueMoviesSelectors.movies);

    const mostVisitedMoviesStatus = useSelector(MostVisitedMoviesSelectors.status);
    const mostVisitedMovies = useSelector(MostVisitedMoviesSelectors.movies);

    const popularShowsStatus = useSelector(PopularShowsSelectors.status);
    const popularShows = useSelector(PopularShowsSelectors.shows);

    useEffect(() => {
        dispatch(featuredMoviesActions.getMoviesAndToggleLoader(NUMBER_OF_CAROUSEL_ITEMS));
        dispatch(moviesInTheatersSelectorsActions.getMoviesAndToggleLoader(20));
        dispatch(regionMoviesActions.getMoviesAndToggleLoader(20));
        dispatch(topRevenueMoviesActions.getMovieAndToggleLoader(8));
        dispatch(mostVisitedMoviesActions.getMoviesAndToggleLoader(20));
        dispatch(popularShowsActions.getShowsAndToggleLoader());
        if (genres.length === 0) {
            dispatch(movieDataListActions.getGenresAndToggleLoader());
        }

        document.documentElement.style = 'scroll-behavior: auto';
        window.scrollTo(0, 0);
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
                {userId &&
                    <SectionLayoutWrapper title='Pick Your Favourite Genres'>
                        <div className={styles.home__genresWrapper}>
                            {genresStatus === 'success' &&
                                genres.map((genre, index) => (
                                        <GenreCard
                                            genre={genre}
                                            key={index}
                                        />
                                    )
                                )}
                        </div>
                    </SectionLayoutWrapper>
                }
                <SectionLayoutWrapper title='In Theatres'>
                    <div className={styles.home__sectionWrapper}>
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
                    title={`Top Picks In ${region}`}
                    mode='light'
                    className={styles.home__lightSection}
                >
                    <div className={styles.home__sectionWrapper}>
                        {regionMoviesStatus === 'success' &&
                            regionMovies.map((movie, index) => (
                                <MovieCard
                                    movie={movie}
                                    mode='dark'
                                    key={index}
                                />
                            )
                        )}
                    </div>
                </SectionLayoutWrapper>
                <SectionLayoutWrapper title='Top Revenues'>
                    <div className={styles.home__topRevenuesWrapper}>
                        {topRevenueMoviesStatus === 'success' &&
                            topRevenueMovies.map((movie, index) => (
                                <TopRevenueMovie
                                    movie={movie}
                                    index={index + 1}
                                    key={index}
                                />
                            )
                        )}
                    </div>
                </SectionLayoutWrapper>
                <SectionLayoutWrapper title='Most Visited'>
                    <div className={styles.home__sectionWrapper}>
                        {mostVisitedMoviesStatus === 'success' &&
                            mostVisitedMovies.map((movie, index) => (
                                <SlateCard
                                    movie={movie}
                                    key={index}
                                />
                            ))
                        }
                    </div>
                </SectionLayoutWrapper>
                <SectionLayoutWrapper title='Popular Shows'>
                    <div className={styles.home__sectionWrapper}>
                        {popularShowsStatus === 'success' &&
                            popularShows.map((show, index) => (
                                <ShowCard
                                    show={show}
                                    key={index}
                                />
                            ))
                        }
                    </div>
                </SectionLayoutWrapper>
                <Footer/>
            </div>
        </WithLayoutWrapper>
    );
};

export default Home;