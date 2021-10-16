import React from 'react';

import styles from './User.module.scss';

const User = ({
    name,
    pictureLink
}) => {
    const onClick = () => {
        // @todo: open dropdown menu
    };

    return (
        <div
            className={styles.user}
            onClick={onClick}
        >
            <span className={styles.user__name}>
                {name}
            </span>
            <img
                className={styles.user__picture}
                alt={`User name - ${name}`}
                src={pictureLink}
            />
        </div>
    );
};

export default User;