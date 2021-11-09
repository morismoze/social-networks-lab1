import React from 'react';

import styles from './ImageLink.module.scss';

const ImageLink = ({
    href,
    picture
}) => {
    return (
        <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.imgLink}
        >
            <img
                src={picture}
                alt={'IMDb'}
                className={styles.imgLink__img}
            />
        </a>
    );
};

export default ImageLink;