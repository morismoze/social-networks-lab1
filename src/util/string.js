export const getDecimalRatingValue = (rating) => {
    return Number(rating) / 10;
};

export const setFixedNumberOfDecimals = (data, numberOfDecimals = 1) => {
    return Number(data).toFixed(numberOfDecimals);
};

export const getYearFromReleaseDate = (date) => {
    return date.split('-')[0];
}