import React from 'react';

import { Fade } from "@mui/material";

import styles from './Image.module.scss';

const Image = ({
    pictureUrl
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

                </div>
            </div>
        </Fade>
    );
};

export default Image;