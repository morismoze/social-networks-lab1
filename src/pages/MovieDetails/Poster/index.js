import React from 'react';

import Image from "../../../components/shared/Image";
import Fallback from '../../../assets/images/poster-fallback.png';
import styles from './Poster.module.scss';

const Poster = ({
    src,
    width,
    height,
    alt
}) => {
    return (
        <div
            className={styles.poster}
            style={{
                width: width,
                height: height
            }}
        >
            <Image
                src={src}
                fallback={Fallback}
                alt={alt}
                className={styles.poster__img}
            />
        </div>
    );
};

export default Poster