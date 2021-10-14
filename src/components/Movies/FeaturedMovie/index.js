import React from 'react';

import MoviePoster from "./MoviePoster";
import MovieData from "./MovieData";
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
            <MoviePoster
                posterLink={posterLink}
                releaseDate={releaseDate}
            />
            <MovieData
                name={name}
                genres={genres}
                duration={duration}
                rating={rating}
                cast={cast}
                synopsys={synopsys}
            />
        </div>
    );
}

export default FeaturedMovie;