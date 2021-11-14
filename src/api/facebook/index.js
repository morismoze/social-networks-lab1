import {getUserCountry, storeUserData} from "../user";
import { getUserLocation } from "../../util/location";

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

export const getUserFbData = (callback) => {
    const fb_token = localStorage.getItem('fb_token');

    window.FB.api('/v12.0/me?fields=email,name,picture.type(small)', { access_token: fb_token }, (response) => {
        if (!response.error) {
            const { id, email, name, picture: { data: { url } } } = response;

            // @todo: improve this logic !!!
            getUserLocation(({ lat, lon }) => {
                getUserCountry(lat, lon)
                    .then((result) => {
                        storeUserData(id, email, name, url, result.data.features[0])
                            .then(() => callback());
                    });
            });
        }
    });
};

export const fbLogin = (callback) => {
    window.FB.login((response) => {
        if (response.status === 'connected') {
            localStorage.setItem('fb_token', response.authResponse.accessToken);
            getUserFbData(callback);
        }
    }, { scope: 'public_profile, email' });
};

export const fbLogout = (callback) => {
    window.FB.getLoginStatus((response) => {
        if (response.status === 'connected') {
            window.FB.logout((response) => {
                localStorage.removeItem('fb_token');
                callback();
            });
        }
    })
};