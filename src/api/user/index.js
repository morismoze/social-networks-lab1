import { user } from "./paths";
import { defaultHeaders, instance } from "../network";

export const storeUserData = async (id, email, name, url) => {
    try {
        const response = await instance.post(
            user.storeUserData,
            { id, email, name, url },
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

export const storeUserLike = async ({ userId, movieId }) => {
    try {
        const response = await instance.post(
            user.storeUserLike(userId),
            { movieId: movieId },
            { headers: defaultHeaders }
        );

        return response.data;
    } catch (err) {
        console.error(err);
        return Promise.reject(err.statusText);
    }
};

export const storeUserUnlike = async ({ userId, movieId }) => {
    try {
        const response = await instance.post(
            user.storeUserUnlike(userId),
            { movieId: movieId },
            { headers: defaultHeaders }
        );

        return response.data;
    } catch (err) {
        console.error(err);
        return Promise.reject(err.statusText);
    }
};

export const getLikedMovies = async (userId) => {
    try {
        const response = await instance.get(
            user.getLikedMovies(userId),
            { headers: defaultHeaders }
        );

        return response.data;
    } catch (err) {
        console.error(err);
        return Promise.reject(err.statusText);
    }
};