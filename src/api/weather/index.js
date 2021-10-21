import { weatherPaths } from "./paths";

const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

export const getCurrentWeather = async ({ lat, lon }) => {

    try {
        const response = await fetch(weatherPaths.getCurrentWeather(lat, lon), {
                method: 'GET',
                headers: {
                    ...defaultHeaders,
                    'Access-Control-Allow-Origin': 'https://localhost:3000',
                    'Access-Control-Expose-Headers': 'Content-Length, X-JSON',
                    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Accept, Accept-Language, X-Authorization',
                    'Access-Control-Max-Age': 86400,
                }
            }
        );

        return response.json();
    } catch (err) {
        console.error(err);
    }
}