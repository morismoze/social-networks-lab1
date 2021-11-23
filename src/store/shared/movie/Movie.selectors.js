import { createSelector } from '@reduxjs/toolkit';

import { convertMinutesIntoHoursAndMinutes } from "../../../util/time";
import { formatPrice, getStyledDate, setFixedNumberOfDecimals } from "../../../util/string";

export const status = createSelector(
    (globalState) => globalState.movieReducer,
    (state) => state.status
);

export const activeIdDetails = createSelector(
    (globalState) => globalState.movieReducer,
    (state) => state.activeIdDetails
);

export const mainStats = createSelector(
    activeIdDetails,
    (details) => {
        const formattedRating = setFixedNumberOfDecimals(details?.vote_average);
        const minutesAndHours = convertMinutesIntoHoursAndMinutes(details?.runtime);
        const formattedRevenue = formatPrice(details?.revenue, 'USD');

        return {
            'Rating': formattedRating,
            'Status': details?.status,
            'Runtime': minutesAndHours ? `${minutesAndHours.hours}h ${minutesAndHours.minutes}min` : null,
            'Revenue': formattedRevenue
        }
    }
);

export const genres = createSelector(
    activeIdDetails,
    (details) => details?.genres.map(genre => genre.name)
);

export const released = createSelector(
    activeIdDetails,
    (details) => getStyledDate(details?.release_date)
);

export const budget = createSelector(
    activeIdDetails,
    (details) => {
        const formattedBudget = formatPrice(details?.budget);

        return formattedBudget;
    }
);

export const spokenLanguages = createSelector(
    activeIdDetails,
    (details) => details?.spoken_languages.map(lang => lang.english_name)
);

export const ytVideo = createSelector(
    activeIdDetails,
    (details) => {console.log(details)
        const ytVideo = details?.videos.results.find(video => video.site === 'YouTube' && video.type === 'Trailer');

        return ytVideo;
    }
);