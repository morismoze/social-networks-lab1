import React, { useState } from 'react';

import PictureLoading from "../shared/PictureLoading";
import Image from "../shared/Image";
import Fallback from "../../assets/images/user-profile-fallback.png";
import styles from './Avatar.module.scss';

const Avatar = ({
    pictureUrl,
    size,
    name
}) => {
    const [ isLoaded, setIsLoaded ] = useState(false);

    const handleOnLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div
            className={styles.avatar}
            style={{
                width: size,
                height: size
            }}
        >
            {!isLoaded &&
                <PictureLoading
                    iconSize={size / 3}
                    wrapperBorder={false}
                />
            }
            <Image
                alt={name}
                src={pictureUrl}
                fallback={Fallback}
                onLoad={handleOnLoad}
                className={styles.avatar__img}
                style={{
                    width: size,
                    height: size
                }}
            />
        </div>
    );
};

export default Avatar;