import React from 'react';

import { Fade } from "@mui/material";

import MovieData from "./MovieData";
import styles from './TopRatedMovie.module.scss';

const TopRatedMovie = ({
    name,
    backdropUrl,
    duration,
    cast,
    genres,
    rating,
    releaseDate,
    synopsys
}) => {
    return (
        <Fade
            timeout={1000}
            in={true}
        >
            <div
                className={styles.topRatedMovie}
                style={{
                    backgroundImage: `url(${backdropUrl})`
                }}
            >
                <div className={styles.topRatedMovie__backdropShade}/>
                <MovieData
                    name={name}
                    genres={genres}
                    duration={duration}
                    rating={rating}
                    cast={cast}
                    synopsys={synopsys}
                />
            </div>
        </Fade>
    );
}

export default TopRatedMovie;