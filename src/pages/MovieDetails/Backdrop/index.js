import React from 'react';

import { Container, Fade } from "@mui/material";

import Stat from "./Stat";
import ImageLink from "../../../components/shared/ImageLink";
import ReleaseYear from "./ReleaseYear";
import HeartButton from "../../../components/shared/userActivity/HeartButton";
import AddButton from "../../../components/shared/userActivity/AddButton";
import RatePicker from "../RatePicker";
import ImdbIcon from '../../../assets/images/imdb_logo.png';
import Fallback from '../../../assets/images/movie-backdrop-fallback.png';
import styles from './Backdrop.module.scss';

const Backdrop = ({
    movieName,
    releaseYear,
    pictureUrl,
    mainStats,
    imdbId,
    genres,
    isLiked,
    isAddedToWatchlist,
    handleMovieLike,
    handleToggleWatchlist
}) => {
    const picture = pictureUrl ? `url(${pictureUrl})` : `url(${Fallback})`;

    return (
        <Fade
            timeout={1500}
            in={true}
        >
            <div className={styles.backdrop}>
                <div
                    className={styles.backdrop__img}
                    style={{ backgroundImage: picture }}
                />
                <div className={styles.backdrop__movieNameShadow}/>
                <div className={styles.backdrop__movieName}>
                    <Container
                        maxWidth='lg'
                        className={styles.backdrop__movieAndReleased}
                    >
                        <span className={styles.backdrop__name}>{movieName}</span>
                        <ReleaseYear year={releaseYear}/>
                    </Container>
                </div>
                <div className={styles.backdrop__stats}>
                    <Container
                        maxWidth='lg'
                        className={styles.backdrop__statsAndLinks}
                    >
                        <div className={styles.backdrop__statsValues}>
                            {Object.keys(mainStats).map((stat, index) => (
                                <Stat
                                    name={stat}
                                    value={mainStats[stat]}
                                    key={index}
                                />
                            ))}
                            <div className={styles.backdrop__activity}>
                                <RatePicker genres={genres}/>
                                <HeartButton
                                    onClick={handleMovieLike}
                                    active={isLiked}
                                />
                                <AddButton
                                    onClick={handleToggleWatchlist}
                                    active={isAddedToWatchlist}
                                />
                            </div>
                        </div>
                        <div className={styles.backdrop__links}>
                            {imdbId &&
                                <ImageLink
                                    href={`https://imdb.com/title/${imdbId}`}
                                    picture={ImdbIcon}
                                />
                            }
                        </div>
                    </Container>
                </div>
            </div>
        </Fade>
    );
};

export default Backdrop;