import React from 'react';

import styles from './Gauge.module.scss';

const Gauge = ({
    percentage,
    icon,
    size,
    color
}) => {
    const BAR_WIDTH = 4;
    const CENTER = size / 2;
    const CIRCLE_RADIUS = CENTER - BAR_WIDTH;
    const DASHARRAY = 2 * CIRCLE_RADIUS * Math.PI;
    const DASHOFFSET = DASHARRAY * (1 - percentage);

    return (
        <div
            className={styles.gauge}
            style={{
                width: size,
                height: size
            }}
        >
            <svg
                className={styles.gauge__rail}
                viewBox={`0 0 ${size} ${size}`}
                xmlns={'http://www.w3.org/2000/svg'}
                width={size}
                height={size}
            >
                <circle
                    cx={CENTER}
                    cy={CENTER}
                    r={CIRCLE_RADIUS}
                />
            </svg>
            <svg
                className={styles.gauge__bar}
                viewBox={`0 0 ${size} ${size}`}
                xmlns={'http://www.w3.org/2000/svg'}
                width={size}
                height={size}
                strokeWidth={BAR_WIDTH}
            >
                <circle
                    cx={CENTER}
                    cy={CENTER}
                    r={CIRCLE_RADIUS}
                    strokeWidth={BAR_WIDTH}
                    strokeDasharray={DASHARRAY}
                    strokeDashoffset={DASHOFFSET && DASHOFFSET}
                    style={{
                        stroke: color
                    }}
                />
            </svg>
            <img
                {...icon}
                className={styles.gauge__icon}
            />
        </div>
    );
};

export default Gauge;