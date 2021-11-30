import React from 'react';

import { getCurrentStyledDate } from "../../../../util/timeAndDate";
import styles from './Weather.module.scss';

const Weather = ({
    weather
}) => {
    if (!weather) {
        return null;
    }

    const {
        weather: [ { description, icon } ],
        main: { temp },
        sys: { country },
        name
    } = weather;

    const date = getCurrentStyledDate();

    return (
        <div className={styles.weather}>
            <div className={styles.weather__dataWrapper}>
                <div className={styles.weather__mainData}>
                    <span className={styles.weather__description}>{description}</span>
                    <div className={styles.weather__mainDataWrapper}>
                        <div className={styles.weather__tempWrapper}>
                            <span className={styles.weather__temp}>{temp.toFixed(1)}</span>
                            <sup className={styles.weather__tempUnit}>&deg;</sup>
                        </div>
                        <div className={styles.weather__dateAndLocation}>
                            <span className={styles.weather__date}>{date}</span>
                            <span className={styles.weather__city}>{name}</span>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={`http://openweathermap.org/img/w/${icon}.png`}
                alt={description}
                title={description}
                className={styles.weather__icon}
            />
        </div>
    );
};

export default Weather;