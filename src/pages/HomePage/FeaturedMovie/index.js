import React from 'react';

import { Link } from "react-router-dom";

import MovieData from "./MovieData";
import { useWindowSize } from "../../../hooks/useWindowSize";
import Fallback from '../../../assets/images/movie-backdrop-fallback.png';
import styles from './FeaturedMovie.module.scss';

const FeaturedMovie = ({
    movie
}) => {
    const { width } = useWindowSize();

    const backgroundImage = width <= 576 ?
        `url(https://image.tmdb.org/t/p/w780${movie.backdrop_path})`
        :
        `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`;

    return (
        <div
            className={styles.featuredMovie}
            style={{
                backgroundImage: movie.backdrop_path ? backgroundImage : `url(${Fallback})`
            }}
        >
            <Link
                to={`/${movie.id}/details`}
                className={styles.featuredMovie__name}
            >
                {movie.title}
            </Link>
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