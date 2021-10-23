import React, { useRef, useState } from 'react';

import classNames from "classnames";

import PictureLoading from "../PictureLoading";
import { useIntersection } from "../../../hooks/useIntersection";
import styles from './LazyLoadedImage.module.scss';

const LazyLoadedImage = ({
    src,
    alt,
    index,
    className
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
                className
            )}
            ref={imgRef}
        >
            {!isLoaded && (
                <PictureLoading/>
            )}
            <div className={styles.lazyLoadedImg__inner}>
                {isInView && (
                    <img
                        src={src}
                        alt={alt}
                        className={classNames(
                            styles.lazyLoadedImg__img,
                            { [styles.lazyLoadedImg__imgLoaded]: isLoaded }
                        )}
                        onLoad={handleOnLoad}
                    />
                )}
            </div>
        </div>
    );
};

export default LazyLoadedImage;