import React from 'react';

import MovieReleaseDate from "../MovieReleaseDate";
import styles from './MoviePoster.module.scss';

const MoviePoster = ({
    releaseDate,
    posterUrl,
    name
}) => {
    return (
        <div className={styles.topRatedMoviePoster}>
            <MovieReleaseDate
                releaseDate={releaseDate}
                className={styles.topRatedMoviePoster__releaseDatePosition}
            />
            <img
                className={styles.topRatedMoviePoster__poster}
                src={posterUrl}
                alt={name}
            />
        </div>
    );
}

export default MoviePoster;