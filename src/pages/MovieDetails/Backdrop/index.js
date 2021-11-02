import React from 'react';

import { Container, Fade } from "@mui/material";

import Stat from "./Stat";
import ImageLink from "./ImageLink";
import ReleaseYear from "./ReleaseYear";
import ImdbIcon from '../../../assets/images/imdb_logo.png';
import Fallback from '../../../assets/images/movie-backdrop-fallback.png';
import styles from './Backdrop.module.scss';

const Backdrop = ({
    movieName,
    releaseYear,
    pictureUrl,
    mainStats,
    imdbId
}) => {
    const picture = pictureUrl ? `url(https://image.tmdb.org/t/p/w1280${pictureUrl})` : `url(${Fallback})`;

    return (
        <Fade
            timeout={1000}
            in={true}
        >
            <div className={styles.backdrop}>
                <div
                    className={styles.backdrop__img}
                    style={{
                        backgroundImage: picture
                    }}
                />
                <div className={styles.backdrop__movieNameShadow}/>
                <div className={styles.backdrop__movieName}>
                    <Container
                        maxWidth={'lg'}
                        className={styles.backdrop__movieAndReleased}
                    >
                        <h1 className={styles.backdrop__name}>{movieName}</h1>
                        <ReleaseYear year={releaseYear}/>
                    </Container>
                </div>
                <div className={styles.backdrop__stats}>
                    <Container
                        maxWidth={'lg'}
                        className={styles.backdrop__statsAndLinks}
                    >
                        <div className={styles.backdrop__statsValues}>
                            {Object.keys(mainStats).map((stat, index) => (
                                <Stat
                                    name={stat} value={mainStats[stat]}
                                    key={index}
                                />
                            ))}
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