import React from 'react';

import MoviesMobileListRow from "./MoviesMobileListRow";
import styles from './MoviesMobileList.module.scss';

const MoviesMobileList = ({
    type,
    moviesIds
}) => {
    return (
        <div className={styles.moviesMobileList}>
            {moviesIds.map((id, index) => (
                <MoviesMobileListRow
                    type={type}
                    id={id}
                    moviesIds={moviesIds}
                    key={index}
                />
            ))}
        </div>
    );
};

export default MoviesMobileList;