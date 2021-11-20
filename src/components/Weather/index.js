import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import * as WeatherSelectors from './redux/Weather.selectors';
import { actions as weatherActions } from './redux/Weather.actions';
import styles from './Weather.module.scss';

const Weather = () => {
    const dispatch = useDispatch();

    const currentWeather = useSelector(WeatherSelectors.currentWeather);

    useEffect(() => {
    }, []);

    return (
        <div>

        </div>
    );
};

export default Weather;