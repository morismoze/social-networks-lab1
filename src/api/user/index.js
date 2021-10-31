import { user } from "./paths";

const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

export const storeUserData = async (id, email, name, url) => {
    try {
        const response = await fetch(user.storeUserData, {
                method: 'POST',
                body: JSON.stringify({ id, email, name, url }),
                headers: defaultHeaders
            }
        );

        return response.json();
    } catch (err) {
        console.error(err);
    }
};

export const storeUserLike = async ({ userId, movieId }) => {
    try {
        const response = await fetch(user.storeUserLike(userId), {
                method: 'POST',
                body: JSON.stringify({ movieId: movieId }),
                headers: defaultHeaders
            }
        );

        return response.json();
    } catch (err) {
        console.error(err);
    }
};

export const storeUserUnlike = async ({ userId, movieId }) => {
    try {
        const response = await fetch(user.storeUserUnlike(userId), {
                method: 'POST',
                body: JSON.stringify({ movieId: movieId }),
                headers: defaultHeaders
            }
        );

        return response.json();
    } catch (err) {
        console.error(err);
    }
};

export const getLikedMovies = async (userId) => {
    try {
        const response = await fetch(user.getLikedMovies(userId), {
                method: 'GET',
                headers: defaultHeaders
            }
        );

        return response.json();
    } catch (err) {
        console.error(err);
    }
};