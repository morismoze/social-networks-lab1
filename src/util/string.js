export const getDecimalRatingValue = (rating) => {
    return Number(rating) / 10;
};

export const setFixedNumberOfDecimals = (data, numberOfDecimals = 1) => {
    return Number(data).toFixed(numberOfDecimals);
};

export const getYearFromReleaseDate = (date) => {
    return date.split('-')[0];
};

export const sortObjectsByProperty = (property) => {
    return function(a, b) {
        if (a[property] > b[property]) {
            return -1;
        } else if (a[property] < b[property]) {
            return 1;
        }
        return 0;
    };
};

export const formatPrice = (price, currency = 'USD') => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    });

    return formatter.format(price);
};