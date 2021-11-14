export const getUserLocation = (callback) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            callback({
                lat: position.coords.latitude,
                lon: position.coords.longitude
            });
        });
    } else {
        return null;
    }
};