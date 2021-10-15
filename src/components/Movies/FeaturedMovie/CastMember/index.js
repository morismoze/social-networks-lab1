import React from 'react';

import styles from './CastMember.module.scss';

const CastMember = ({
    name,
    pictureLink
}) => {
    return (
        <div className={styles.castMember}>
            <img
                src={pictureLink}
                alt={`Cast member, ${name}`}
                title={name}
                className={styles.castMember__img}
            />
        </div>
    );
};

export default CastMember;