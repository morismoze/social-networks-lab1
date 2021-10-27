import React from 'react';

import { Container, Fade } from "@mui/material";

import Stat from "./Stat";
import ImageLink from "./ImageLink";
import ImdbIcon from '../../../assets/images/imdb_logo.png';
import styles from './Backdrop.module.scss';

const Backdrop = ({
    pictureUrl,
    mainStats,
    imdbId
}) => {
    return (
        <Fade
            timeout={1000}
            in={true}
        >
            <div className={styles.imgWrapper}>
                <div
                    className={styles.imgWrapper__img}
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${pictureUrl})`
                    }}
                />
                <div className={styles.imgWrapper__stats}>
                    <Container
                        maxWidth={'lg'}
                        className={styles.imgWrapper__statsAndLinks}
                    >
                        <div className={styles.imgWrapper__statsValues}>
                            {Object.keys(mainStats).map((stat, index) => (
                                <Stat
                                    name={stat} value={mainStats[stat]}
                                    key={index}
                                />
                            ))}
                        </div>
                        <div className={styles.imgWrapper__links}>
                            <ImageLink
                                href={`https://imdb.com/title/${imdbId}`}
                                picture={ImdbIcon}
                            />
                        </div>
                    </Container>
                </div>
            </div>
        </Fade>
    );
};

export default Backdrop;