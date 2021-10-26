export const convertMinutesIntoHoursAndMinutes = (minutesData) => {
    const hours = Math.floor(minutesData / 60);
    const minutes = minutesData % 60;

    return {
        hours: hours,
        minutes: minutes
    }
};