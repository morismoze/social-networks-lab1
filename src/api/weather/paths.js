const apiUrl = process.env.REACT_APP_API_BASE_URL;
const owmUrl = process.env.REACT_APP_OWM_URL;

const api = {
    currentWeather: `${owmUrl}/weather`,
};

const appendApiKey = (url) => {
    const API_KEY = process.env.REACT_APP_OWM_API_KEY;

    return `${url}?appid=${API_KEY}`;
}

export const weatherPaths = {
    getCurrentWeather: (lat, lon) => `${appendApiKey(api.currentWeather)}&lat=${lat}&lon=${lon}`
};