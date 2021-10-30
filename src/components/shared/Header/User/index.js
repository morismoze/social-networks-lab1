import React, { useState } from 'react';

import PictureLoading from "../../PictureLoading";
import Fallback from '../../../../assets/images/user-profile-fallback.png';
import styles from './User.module.scss';
import Image from "../../Image";

const User = ({
    name,
    pictureLink
}) => {
    const [ isLoaded, setIsLoaded ] = useState(false);

    const handleOnLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div className={styles.user}>
            <span className={styles.user__name}>
                {name}
            </span>
            <div className={styles.user__imgWrapper}>
                {!isLoaded &&
                    <PictureLoading
                        iconSize={15}
                        wrapperBorder={false}
                    />
                }
                <Image
                    className={styles.user__img}
                    alt={name}
                    src={pictureLink}
                    fallback={Fallback}
                    onLoad={handleOnLoad}
                />
            </div>
        </div>
    );
};

export default User;