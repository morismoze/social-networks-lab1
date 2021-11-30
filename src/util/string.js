export const getDecimalRatingValue = (rating) => {
    return Number(rating) / 10;
};

export const setFixedNumberOfDecimals = (data, numberOfDecimals = 1) => {
    if (!data) {
        return null;
    }

    return Number(data).toFixed(numberOfDecimals);
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
    if (!price) {
        return null;
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    });

    return formatter.format(price);
};

export const splitCamelCase = (data) => {
    return data.split(/(?=[A-Z])/).join(' ');
};