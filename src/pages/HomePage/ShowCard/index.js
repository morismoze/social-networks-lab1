import React, { useState } from 'react';

import { Slide } from "@mui/material";
import classNames from "classnames";

import LazyLoadedImage from "../../../components/shared/LazyLoadedImage";
import Fallback from '../../../assets/images/cast-fallback.png';
import styles from './ShowCard.module.scss';

const ShowCard = ({ show }) => {
    const [ isHovered, setIsHovered ] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <div
            className={styles.container}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            <LazyLoadedImage
                src={show.image_thumbnail_path}
                alt={show.name}
                height={220}
                width={150}
                fallback={Fallback}
                className={styles.container__img}
            />
            <Slide
                in={isHovered}
                timeout={300}
                direction='down'
            >
                <div className={classNames(
                    styles.container__dataWrapper,
                    { [styles['container__dataWrapper--show']]: isHovered }
                )}>
                    <span className={styles.container__showName}>{show.name}</span>
                    {show.start_date &&
                        <span className={styles.container__startDate}>{show.start_date}</span>
                    }
                    <span className={styles.container__status}>{show.status}</span>
                </div>
            </Slide>
        </div>
    );
};

export default ShowCard;