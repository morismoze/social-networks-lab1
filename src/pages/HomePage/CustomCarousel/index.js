import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import styles from './CustomCarousel.module.scss';
import './awesome-slider-override.scss';

const CustomCarousel = ({
    items,
    autoplay,
    animation = 'open',
    interval
}) => {
    if (!items) {
        return null;
    }

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <AutoplaySlider
            animation={animation}
            play={autoplay}
            organicArrows={false}
            interval={interval}
            className={styles.carousel}
        >
            {items.map((item) => (
                <div className={styles.carousel__item}>{item}</div>
            ))}
        </AutoplaySlider>
    );
};

export default CustomCarousel;