export const getDecimalRatingValue = (rating) => {
    return Number(rating) / 10;
};

export const getFormattedRatingValue = (rating) => {
    return Number(rating).toFixed(1);
};