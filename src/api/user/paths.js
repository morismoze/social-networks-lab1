const apiUrl = process.env.REACT_APP_API_BASE_URL

const api = {
    userData: `${apiUrl}/user/store`
};

export const user = {
    storeUserData: () => api.userData
};