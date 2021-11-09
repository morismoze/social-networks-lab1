import React from 'react';

import MovieData from "./MovieData";
import styles from './FeaturedMovie.module.scss';

const FeaturedMovie = ({
    movie
}) => {
    return (
        <div
            className={styles.featuredMovie}
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
            }}
        >
            <div className={styles.featuredMovie__backdropShade}/>
            <MovieData
                name={movie.title}
                genres={movie.genre_ids}
                rating={movie.vote_average}
                synopsys={movie.overview}
            />
        </div>
    );
}

export default FeaturedMovie;