import React from 'react';

import styles from './Tagline.module.scss';

const Tagline = ({
    tagline
}) => {
    return (
        <cite className={styles.tagline}>
            &#8220;
            {tagline}
            &#8221;
        </cite>
    );
};

export default Tagline;