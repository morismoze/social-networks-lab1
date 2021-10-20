import React, { useRef, useState } from 'react';

import { Fade } from "@mui/material";

import { useIntersection } from "../../../hooks/useIntersection";
import styles from './LazyLoadedImage.module.scss';
import classNames from "classnames";

const LazyLoadedImage = ({
    src,
    alt,
    index
}) => {
    const [ isInView, setIsInView ] = useState();

    const [ isLoaded, setIsLoaded ] = useState(false);

    const imgRef = useRef();

    const handleOnLoad = () => {
        setIsLoaded(true);
    };

    useIntersection(imgRef, () => {
        setIsInView(true);
    });

    return (
        <div
            className={classNames(
                styles.lazyLoadedImg,
                { [styles.loaded]: isLoaded }
            )}
            ref={imgRef}
        >
            <div className={styles.lazyLoadedImg__inner}>
                {isInView ? (
                    <img
                        src={src}
                        alt={alt}
                        className={classNames(
                            styles.lazyLoadedImg__img,
                            { [styles.lazyLoadedImg__imgLoaded]: isLoaded }
                        )}
                        onLoad={handleOnLoad}
                    />
                ) : (
                    <div className={styles.lazyLoadedImg__shimmer}/>
                )}
            </div>
        </div>
    );
};

export default LazyLoadedImage;