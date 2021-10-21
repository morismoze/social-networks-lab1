import React from 'react';

import MoviePoster from "./MoviePoster";
import MovieData from "./MovieData";
import styles from './TopRatedMovie.module.scss';

const TopRatedMovie = ({
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
        <div className={styles.topRatedMovie}>
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

export default TopRatedMovie;