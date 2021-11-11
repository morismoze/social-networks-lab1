import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import CustomCarousel from "./CustomCarousel";
import Footer from "../../../components/shared/Footer";
import FeaturedMovie from "./FeaturedMovie";
import WithLayoutWrapper from "../../../components/shared/withLayoutWrapper";
import * as FeatureMoviesSelectors from './redux/FeaturedMovies/FeaturedMovies.selectors';
import { actions as featuredMoviesActions } from './redux/FeaturedMovies/FeaturedMovies.actions';
import styles from './Home.module.scss';

const NUMBER_OF_CAROUSEL_ITEMS = 5;

const Home = () => {
    const dispatch = useDispatch();

    const featuredMoviesStatus = useSelector(FeatureMoviesSelectors.status);

    const featuredMovies = useSelector(FeatureMoviesSelectors.movies);

    useEffect(() => {
        dispatch(featuredMoviesActions.getMoviesAndToggleLoader(NUMBER_OF_CAROUSEL_ITEMS));
    }, []);

    return (
        <WithLayoutWrapper>
            <div className={styles.home}>
                <div className={styles.home__carouselWrapper}>
                    <CustomCarousel
                        items={featuredMoviesStatus === 'success' &&
                            featuredMovies.map((movie, index) => (<FeaturedMovie movie={movie} key={index}/>))
                        }
                        interval={8000}
                    />
                </div>
                <Footer/>
            </div>
        </WithLayoutWrapper>
    );
};

export default Home;