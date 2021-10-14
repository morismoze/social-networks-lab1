import React from 'react';

import MovieRating from "../MovieRating";
import CastMember from "../CastMember";
import styles from './MovieData.module.scss';

const MovieData = ({
    name,
    duration,
    rating,
    genres,
    cast,
    synopsys
}) => {
    return (
        <div className={styles.data}>
            <span className={styles.data__name}>{name}</span>
            <div className={styles.data__genresDurationWrapper}>
                <div className={styles.data__genresWrapper}>
                    {genres.map((genre, index) => (
                        <React.Fragment key={index}>
                            <span className={styles.data__genre}>{genre}</span>
                            {index < (genres.length - 1) &&
                                <span className={styles.data__genreSlash}>/</span>
                            }
                        </React.Fragment>
                    ))}
                </div>
                <span className={styles.data__duration}>
                    {duration.hour}h {duration.minutes}m
                </span>
            </div>
            <MovieRating rating={rating}/>
            <div className={styles.data__castWrapper}>
                <span className={styles.data__castTitle}>The cast</span>
                {cast.map((member, index) => (
                    <CastMember
                        name={member.name}
                        pictureLink={member.pictureLink}
                        key={index}
                    />
                ))}
            </div>
            <div className={styles.data__synopsysWrapper}>
                <span className={styles.data__synopsysTitle}>Synopsys</span>
                <p className={styles.data__synopsys}>{synopsys}</p>
            </div>
        </div>
    );
}

export default MovieData;