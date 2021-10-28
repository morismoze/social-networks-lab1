import React from 'react';

import styles from './CastMember.module.scss';
import LazyLoadedImage from "../../../../components/shared/LazyLoadedImage";

const CastMember = ({
    pictureLink,
    name,
    character
}) => {
    return (
        <div className={styles.castMember}>
            <div className={styles.castMember__imgWrapper}>
                <LazyLoadedImage
                    src={pictureLink}
                    alt={name}
                    aspectRatio={154/231}
                />
            </div>
            <span
                className={styles.castMember__name}
                title={name}
            >
                {name}
            </span>
        </div>
    );
};

export default CastMember;