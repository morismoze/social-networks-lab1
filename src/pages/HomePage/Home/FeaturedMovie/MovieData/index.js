import React from 'react';

import MovieRating from "../MovieRating";
import WithDataParagraphLayoutWrapper from "../withDataParagraphLayoutWrapper";
import styles from './MovieData.module.scss';

const MovieData = ({
    name,
    rating,
    genres,
    synopsys
}) => {
    return (
        <div className={styles.data}>
            <span className={styles.data__name}>{name}</span>
            <div className={styles.data__genresDurationWrapper}>
                <div className={styles.data__genresWrapper}>
                    {/*{genres.map((genre, index) => (
                        <React.Fragment key={index}>
                            <span className={styles.data__genre}>{genre}</span>
                            {index < (genres.length - 1) &&
                                <span className={styles.data__genreSlash}>/</span>
                            }
                        </React.Fragment>
                    ))}*/}
                </div>
            </div>
            <MovieRating rating={rating}/>
            <WithDataParagraphLayoutWrapper
                paragraphTitle={'Synopsys'}
                className={styles.data__synopsysWrapper}
            >
                <p className={styles.data__synopsys}>{synopsys}</p>
            </WithDataParagraphLayoutWrapper>
        </div>
    );
}

export default MovieData;