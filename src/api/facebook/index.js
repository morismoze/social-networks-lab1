import { storeUserData } from "../user";

export const initFacebookSdk = () => {
    return new Promise(resolve => {
        // wait for facebook sdk to initialize before starting the react app
        window.fbAsyncInit = () => {
            window.FB.init({
                appId: process.env.REACT_APP_FB_APP_ID,
                cookie: true,
                xfbml: true,
                version: 'v8.0'
            });
        };

        // load facebook sdk script
        ((d, s, id) => {
            let js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');

        resolve();
    });
};

const getUserFbData = (storeUserData) => {
    window.FB.api('/me?fields=email,name', storeUserData);
};

export const fbLogin = (callback = null) => {
    window.FB.login(response => {
        if(response.status === 'connected') {
            getUserFbData(storeUserData);

            if(callback) {
                callback();
            }
        }
    }, { scope: 'public_profile, email' });
};

export const fbLogout = () => {
    // revoke app permissions to logout completely because FB.logout() doesn't remove FB cookie
    window.FB.api('/me/permissions', 'delete', null, () => window.FB.logout());
};

export const getFbLoginStatus = async () => {
    // @todo: dispatch a loading spinner

    return new Promise((resolve) =>
        window.FB.getLoginStatus((response) => {
            resolve(response.status);
        }
    ));
};