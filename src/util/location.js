export const getUserLocation = (callback) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            callback(position.coords.latitude, position.coords.longitude);
        });
    } else {
        return null;
    }
}