import React from "react";

import classNames from "classnames";

import styles from './Dots.module.scss';

const Dot = ({
    active
}) => {
    return (
        <span className={classNames(
            styles.dot,
            { [styles['dot--active']]: active }
        )}/>
    );
};

const Dots = ({
    images,
    activeSlide
}) => {
    return (
        <div className={styles.dots}>
            {images.map((slide, i) => (
                <Dot
                    key={slide + i}
                    active={activeSlide === i}
                />
            ))}
        </div>
    );
}

export default Dots;