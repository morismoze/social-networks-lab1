import React from 'react';

import { useSelector } from "react-redux";

import Header from "../../components/shared/Header";
import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import FeaturedMovie from "../../components/Movies/TopRatedMovie";
import * as MovieSelectors from '../../store/shared/movie/Movie.selectors';
import styles from './FeaturedPage.module.scss';

const FeaturedPage = () => {
    const featuredMovies = useSelector(MovieSelectors.featuredMovies);

    return (
        <>
            <Header/>
            <WithLayoutWrapper>
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
            </WithLayoutWrapper>
        </>
    );
};

export default FeaturedPage;