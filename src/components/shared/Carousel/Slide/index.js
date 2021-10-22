import React from 'react';

import styles from './Slide.module.scss';

const Slide = ({
    item
}) => {
    return (
        <div className={styles.slide}>
            {item}
        </div>
    )
}

export default Slide;