import { createSelector } from '@reduxjs/toolkit';

import { convertMinutesIntoHoursAndMinutes } from "../../../util/time";
import { formatPrice, setFixedNumberOfDecimals } from "../../../util/string";

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
            'Runtime': `${minutesAndHours.hours}h ${minutesAndHours.minutes}min`,
            'Revenue': state.activeIdDetails?.revenue === 0 ? '--' : formattedRevenue
        }
    }
);
