import React from 'react';

import MovieReleaseDate from "../MovieReleaseDate";
import styles from './FeaturedMoviePoster.module.scss';

const FeaturedMoviePoster = ({
    releaseDate,
    posterLink
}) => {
    return (
        <div className={styles.featuredMoviePoster}>
            <MovieReleaseDate
                releaseDate={releaseDate}
            />
            <img
                className={styles.featuredMoviePoster__poster}
                src={posterLink}
                alt={'Movie poster'}
            />
        </div>
    );
}

export default FeaturedMoviePoster;