import React, {useState} from 'react';

import LoadingShimmer from "../../PictureLoading";
import styles from './User.module.scss';

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
                    <LoadingShimmer/>
                }
                <img
                    className={styles.user__img}
                    alt={name}
                    src={pictureLink}
                    onLoad={handleOnLoad}
                />
            </div>
        </div>
    );
};

export default User;