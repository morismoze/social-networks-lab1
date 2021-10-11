import React from 'react';

import FeaturedMoviePoster from "./FeaturedMoviePoster";
import FeaturedMovieData from "./FeaturedMovieData";
import styles from './FeaturedMovie.module.scss';

const FeaturedMovie = () => {
    return (
        <div className={styles.featuredMovie}>
            <FeaturedMoviePoster

            />
            <FeaturedMovieData/>
        </div>
    );
}

export default FeaturedMovie;