import React from 'react';

import MovieReleaseDate from "../MovieReleaseDate";
import styles from './MoviePoster.module.scss';

const MoviePoster = ({
    releaseDate,
    posterLink
}) => {
    return (
        <div className={styles.featuredMoviePoster}>
            <MovieReleaseDate
                releaseDate={releaseDate}
                className={styles.featuredMoviePoster__releaseDatePosition}
            />
            <img
                className={styles.featuredMoviePoster__poster}
                src={posterLink}
                alt={'Movie poster'}
            />
        </div>
    );
}

export default MoviePoster;