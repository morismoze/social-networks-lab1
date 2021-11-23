import React from 'react';

import MovieData from "./MovieData";
import Fallback from '../../../assets/images/movie-backdrop-fallback.png';
import styles from './FeaturedMovie.module.scss';

const FeaturedMovie = ({
    movie
}) => {
    return (
        <div
            className={styles.featuredMovie}
            style={{
                backgroundImage: movie.backdrop_path ? `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` : `url(${Fallback})`
            }}
        >
            <span className={styles.featuredMovie__name}>{movie.title}</span>
            <MovieData
                id={movie.id}
                name={movie.title}
                genres={movie.genre_ids}
                rating={movie.vote_average}
                synopsys={movie.overview}
            />
        </div>
    );
}

export default FeaturedMovie;