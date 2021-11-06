import axios from "axios";

export const instance = axios.create();

instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status === 401) {
        window.location.href = `https://${window.location.host}/auth`;
    }
});

export const defaultHeaders = {
    'Content-Type': 'text/plain',
    'Authorization': `Basic ${localStorage.getItem('fb_token')}`
};