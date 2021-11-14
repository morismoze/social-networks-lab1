import { user } from "./paths";
import { defaultHeaders, instance } from "../network";

export const storeUserData = async (id, email, name, url, location) => {
    try {
        const response = await instance.post(
            user.storeUserData,
            { id, email, name, url, location },
            { headers: defaultHeaders }
        );

        return response.data;
    } catch (err) {
        console.error(err);
        return Promise.reject(err.statusText);
    }
};

export const getUserData = async () => {
    try {
        const response = await instance.get(
            user.getUserData,
            { headers: defaultHeaders }
        );

        return response.data;
    } catch (err) {
        console.error(err);
        return Promise.reject(err.statusText);
    }
};

export const addToLikes = async ({ userId, movieId }) => {
    try {
        const response = await instance.post(
            user.addToLikes(userId),
            { movieId: movieId },
            { headers: defaultHeaders }
        );

        return response.data;
    } catch (err) {
        console.error(err);
        return Promise.reject(err.statusText);
    }
};

export const removeFromLikes = async ({ userId, movieId }) => {console.log(movieId)
    try {
        const response = await instance.post(
            user.removeFromLikes(userId),
            { movieId: movieId },
            { headers: defaultHeaders }
        );

        return response.data;
    } catch (err) {
        console.error(err);
        return Promise.reject(err.statusText);
    }
};

export const addToWatchlist = async ({ userId, movieId }) => {
    try {
        const response = await instance.post(
            user.addToWatchlist(userId),
            { movieId: movieId },
            { headers: defaultHeaders }
        );

        return response.data;
    } catch (err) {
        console.error(err);
        return Promise.reject(err.statusText);
    }
};

export const removeFromWatchlist = async ({ userId, movieId }) => {
    try {
        const response = await instance.post(
            user.removeFromWatchlist(userId),
            { movieId: movieId },
            { headers: defaultHeaders }
        );

        return response.data;
    } catch (err) {
        console.error(err);
        return Promise.reject(err.statusText);
    }
};

export const getUserCountry = async (lat, lon) => {
    try {
        const response = await instance.get(
            user.getUserCountry(lat, lon),
            { headers: defaultHeaders }
        );

        return response;
    } catch (err) {
        console.error(err);
        return Promise.reject(err.statusText);
    }
};