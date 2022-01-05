import { showPaths } from "./paths";
import { defaultHeaders, instance } from "../network";

export const getPopularShows = async () => {
    try {
        const response = await instance.get(
            showPaths.getPopularShows,
            {
                headers: defaultHeaders
            }
        );

        return response.data;
    } catch (err) {
        console.error(err);
        return Promise.reject(err.statusText);
    }
};