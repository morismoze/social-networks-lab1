import React from 'react';

import Grow from '@mui/material/Grow';

import MovieReleaseDate from "../MovieReleaseDate";
import styles from './MoviePoster.module.scss';

const MoviePoster = ({
    releaseDate,
    posterLink
}) => {
    return (
        <Grow in={true}>
            <div className={styles.topRatedMoviePoster}>
                <MovieReleaseDate
                    releaseDate={releaseDate}
                    className={styles.topRatedMoviePoster__releaseDatePosition}
                />
                <img
                    className={styles.topRatedMoviePoster__poster}
                    src={posterLink}
                    alt={'Movie poster'}
                />
            </div>
        </Grow>
    );
}

export default MoviePoster;