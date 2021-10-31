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