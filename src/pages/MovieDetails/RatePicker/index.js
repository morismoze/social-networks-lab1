import React, { useState } from 'react';

import Star from "./Star";
import styles from './RatePicker.module.scss';

const RatePicker = ({

}) => {
    const [ hoverIndex, setHoverIndex ] = useState(null);

    const [ selectedIndex, setSelectedIndex ] = useState(0);

    const onMouseEnter = (index) => {
        setHoverIndex(index);
    };

    const onMouseLeave = () => {
        setHoverIndex(null);
    };

    const onClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <div className={styles.ratePicker}>
            <span className={styles.ratePicker__label}>Rate this movie:</span>
            <div className={styles.ratePicker__starsContainer}>
                {Array(10).fill('').map((item, index) =>(
                    <Star
                        index={index}
                        hoverIndex={hoverIndex}
                        selectedIndex={selectedIndex}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        onClick={onClick}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default RatePicker;