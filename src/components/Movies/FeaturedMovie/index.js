import React from 'react';

import FeaturedMoviePoster from "./FeaturedMoviePoster";
import FeaturedMovieData from "./FeaturedMovieData";
import styles from './FeaturedMovie.module.scss';

const FeaturedMovie = ({
    name,
    posterLink,
    duration,
    cast,
    genres,
    rating,
    releaseDate,
    synopsys
}) => {
    return (
        <div className={styles.featuredMovie}>
            <FeaturedMoviePoster
                posterLink={posterLink}
                releaseDate={releaseDate}
            />
            <FeaturedMovieData
                name={name}
                cast={cast}
                duration={duration}
                genres={genres}
                rating={rating}
                releaseDate={releaseDate}
                synopsys={synopsys}
            />
        </div>
    );
}

export default FeaturedMovie;