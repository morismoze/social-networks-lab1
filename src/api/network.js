import axios from "axios";

export const instance = axios.create();

instance.interceptors.request.use((config) => {
    // @todo: attach token auth only on particular list of routes
    if (!config.url.includes('geoapify')) {
        const token = localStorage.getItem('fb_token');
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    // @todo: handle REQUEST errors
});

export const setResponsesInterceptor = (navigate, location) => {
    instance.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        if (error.response.status === 401) {
            navigate('/auth', { state: location });

            return Promise.reject(error.response);
        }
    });
}

export const defaultHeaders = {
    'Content-Type': 'application/json'
};