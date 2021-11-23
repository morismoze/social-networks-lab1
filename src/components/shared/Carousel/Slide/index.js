import React from 'react';

import { useWindowSize } from "../../../../hooks/useWindowSize";
import styles from './Slide.module.scss';

const Slide = ({
    item
}) => {
    const { width } = useWindowSize();

    return (
        <div
            className={styles.slide}
            style={{ width: `${width}px` }}
        >
            {item}
        </div>
    )
}

export default Slide;