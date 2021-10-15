import React from 'react';

import { AiOutlineClockCircle } from "react-icons/all";

import MovieRating from "../MovieRating";
import CastMember from "../CastMember";
import WithDataParagraphLayoutWrapper from "../withDataParagraphLayoutWrapper";
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
                <div className={styles.data__durationWrapper}>
                    <AiOutlineClockCircle
                        className={styles.data__durationIcon}
                    />
                    <span className={styles.data__duration}>
                        {duration.hour}h {duration.minutes}m
                    </span>
                </div>
            </div>
            <MovieRating rating={rating}/>
            <WithDataParagraphLayoutWrapper
                paragraphTitle={'The cast'}
                className={styles.data__castContainer}
            >
                <div className={styles.data__castWrapper}>
                    {cast.map((member, index) => (
                        <CastMember
                            name={member.name}
                            pictureLink={member.pictureLink}
                            key={index}
                        />
                    ))}
                </div>
            </WithDataParagraphLayoutWrapper>
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