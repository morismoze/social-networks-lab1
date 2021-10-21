import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import * as WeatherSelectors from './redux/Weather.selectors';
import { actions as weatherActions } from './redux/Weather.actions';
import { getUserLocation } from "../../util/location";
import styles from './Weather.module.scss';

const Weather = () => {
    const dispatch = useDispatch();

    const currentWeather = useSelector(WeatherSelectors.currentWeather);

    useEffect(() => {
        getUserLocation((lat, lon) => dispatch(weatherActions.getCurrentWeather({ lat, lon })));
    }, []);

    return (
        <div>

        </div>
    );
};

export default Weather;