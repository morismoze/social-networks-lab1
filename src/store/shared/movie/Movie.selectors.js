import { createSelector } from '@reduxjs/toolkit';

import { convertMinutesIntoHoursAndMinutes } from "../../../util/time";
import { formatPrice, getStyledReleaseDate, setFixedNumberOfDecimals } from "../../../util/string";

export const status = createSelector(
    (globalState) => globalState.movieReducer,
    (state) => state.status
);


export const activeId = createSelector(
    (globalState) => globalState.movieReducer,
    (state) => state.activeId
);

export const activeIdDetails = createSelector(
    (globalState) => globalState.movieReducer,
    (state) => state.activeIdDetails
);

export const mainStats = createSelector(
    (globalState) => globalState.movieReducer,
    (state) => {
        const formattedRating = setFixedNumberOfDecimals(state.activeIdDetails?.vote_average);
        const minutesAndHours = convertMinutesIntoHoursAndMinutes(state.activeIdDetails?.runtime);
        const formattedRevenue = formatPrice(state.activeIdDetails?.revenue, 'USD');

        return {
            'Rating': formattedRating,
            'Status': state.activeIdDetails?.status,
            'Runtime': minutesAndHours ? `${minutesAndHours.hours}h ${minutesAndHours.minutes}min` : null,
            'Revenue': formattedRevenue
        }
    }
);

export const genres = createSelector(
    (globalState) => globalState.movieReducer,
    (state) => state.activeIdDetails?.genres.map(genre => genre.name)
);

export const released = createSelector(
    (globalState) => globalState.movieReducer,
    (state) => state.activeIdDetails && getStyledReleaseDate(state.activeIdDetails.release_date)
);

export const budget = createSelector(
    (globalState) => globalState.movieReducer,
    (state) => {
        const formattedBudget = formatPrice(state.activeIdDetails?.budget);

        return formattedBudget;
    }
);

export const spokenLanguages = createSelector(
    (globalState) => globalState.movieReducer,
    (state) => state.activeIdDetails?.spoken_languages.map(lang => lang.english_name)
);

export const ytVideo = createSelector(
    (globalState) => globalState.movieReducer,
    (state) => {
        const ytVideo = state.activeIdDetails?.videos.results.find(video => video.site === 'YouTube' && video.type === 'Trailer');

        return ytVideo;
    }
);