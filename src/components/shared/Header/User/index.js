import React from 'react';

import Avatar from "../../../Avatar";
import styles from './User.module.scss';

const User = ({
    name,
    pictureUrl
}) => {
    return (
        <div className={styles.user}>
            <span className={styles.user__name}>
                {name}
            </span>
            <Avatar
                pictureUrl={pictureUrl}
                size={32}
                name={name}
            />
        </div>
    );
};

export default User;