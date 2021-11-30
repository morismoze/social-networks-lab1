const getTextDay = (day) => {
    const days = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];

    return days[day];
};

const getTextMonth = (month) => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return months[month - 1];
};

export const convertMinutesIntoHoursAndMinutes = (minutesData) => {
    if (!minutesData) {
        return null;
    }

    const hours = Math.floor(minutesData / 60);
    const minutes = minutesData % 60;

    return {
        hours: hours,
        minutes: minutes
    }
};

export const getCurrentStyledDate = () => {
    const date = new Date();
    const weekday = getTextDay(date.getDay());
    const day = date.getDate();
    const month = getTextMonth(date.getMonth() + 1);

    return `${weekday}, ${day} ${month}`
};

export const extractYearFromReleaseDate = (date) => {
    if (!date) {
        return null;
    }

    return date.split('-')[0];
};

export const extractMonthFromReleaseDate = (date) => {
    if (!date) {
        return null;
    }

    return date.split('-')[1];
};

export const extractDayFromReleaseDate = (date) => {
    if (!date) {
        return null;
    }

    return date.split('-')[2];
};

export const getStyledDate = (date) => {
    if (!date) {
        return null;
    }

    const day = extractDayFromReleaseDate(date);
    const month = extractMonthFromReleaseDate(date);
    const year = extractYearFromReleaseDate(date);
    const textMonth = getTextMonth(month);

    return `${textMonth} ${day}, ${year}`;
};