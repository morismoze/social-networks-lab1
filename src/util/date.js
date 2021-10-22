const getMonthAbbreviation = (month) => {
    switch (month) {
        case '01': return 'JAN';
        case '02': return 'FEB';
        case '03': return 'MAR';
        case '04': return 'APR';
        case '05': return 'MAY';
        case '06': return 'JUN';
        case '07': return 'JUL';
        case '08': return 'AUG';
        case '09': return 'SEP';
        case '10': return 'OCT';
        case '11': return 'NOV';
        case '12': return 'DEV';
    }
};

export const getReleaseDateParts = date => {
    const splitDate = date.split('-');

    return {
        day: splitDate[2],
        month: getMonthAbbreviation(splitDate[1]),
        year: splitDate[0]
    }
};