import { moviePaths } from "./paths";

const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

export const getFeaturedMovie = async () => {
    try {
        const response = await fetch(moviePaths.getFeaturedMovie(), {
                method: 'GET',
                headers: defaultHeaders
            }
        );

        return response.json();
    } catch (err) {
        console.error(err);
    }
};

export const getPopularMovies = async () => {
    try {
        const response = await fetch(moviePaths.getPopularMovies, {
                method: 'GET',
                headers: defaultHeaders
            }
        );

        return response.json();
    } catch (err) {
        console.error(err);
    }
}