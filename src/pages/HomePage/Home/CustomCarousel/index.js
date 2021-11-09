import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import styles from './CustomCarousel.module.scss';

const CustomCarousel = ({
    items,
    autoplay,
    animation
}) => {
    if (!items) {
        return null;
    }

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <AutoplaySlider
            animation='open'
            play
            interval={3000}
            className={styles.carousel}
        >
            {items.map((item) => (
                <div className={styles.carousel__item}>{item}</div>
            ))}
        </AutoplaySlider>
    );
};

export default CustomCarousel;