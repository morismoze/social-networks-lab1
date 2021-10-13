export const getReleaseDateParts = date => {
    const splitDate = date.split('/');

    return {
        day: splitDate[1],
        month: splitDate[0],
        year: splitDate[2]
    }
}