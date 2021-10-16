import React from 'react';

import { useSelector } from "react-redux";

import Header from "../../components/shared/Header";
import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import FeaturedMovie from "../../components/Movies/TopRatedMovie";
import * as NavigationSelectors from '../../store/shared/navigation/Navigation.selectors';
import * as MovieSelectors from '../../store/shared/movie/Movie.selectors';
import { HEADER_NAV_ITEMS } from "../../constants/header";
import styles from './FeaturedPage.module.scss';

const FeaturedPage = () => {

    const activeTab = useSelector(NavigationSelectors.activeTab);

    const featuredMovies = useSelector(MovieSelectors.featuredMovies);

    const Children = () => (
        <>
            {HEADER_NAV_ITEMS[0].id === activeTab &&
                <div className={styles.featuredMoviesContainer}>
                    {featuredMovies.map((movie, index) => (
                        <FeaturedMovie
                            name={movie.name}
                            releaseDate={movie.releaseDate}
                            posterLink={movie.posterLink}
                            duration={movie.duration}
                            cast={movie.cast}
                            synopsys={movie.synopsys}
                            rating={movie.rating}
                            genres={movie.genres}
                            key={index}
                        />
                    ))}
                </div>
            }
        </>
    );

    const WithFeaturedPageLayout = WithLayoutWrapper(Children);

    return (
        <>
            <Header/>
            <WithFeaturedPageLayout/>
        </>
    );
};

export default FeaturedPage;