import React from 'react';

import { Link } from "react-router-dom";

import LazyLoadedImage from "../../../../components/shared/LazyLoadedImage";
import Fallback from '../../../../assets/images/cast-fallback.png';
import styles from './CastMember.module.scss';

const CastMember = ({
    id,
    pictureLink,
    name,
    width,
    height,
    character
}) => {
    return (
        <div className={styles.castMember}>
            <Link
                to={`/people/${id}`}
                className={styles.castMember__imgWrapper}
            >
                <LazyLoadedImage
                    src={pictureLink}
                    alt={name}
                    width={width}
                    height={height}
                    fallback={Fallback}
                />
            </Link>
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