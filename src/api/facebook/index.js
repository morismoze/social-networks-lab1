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

export const getUserFbData = (callback, storeDataFlag = false) => {
    const fb_token = localStorage.getItem('fb_token');

    window.FB.api('/v12.0/me?fields=email,name,picture.type(small)', { access_token: fb_token }, (response) => {
        const {id, email, name, picture: { data: { url } }} = response;

        if (storeDataFlag) {
            storeUserData(id, email, name, url);
        }

        callback({ id, email, name, url });
    });
};

export const fbLogin = async (callback) => {
    window.FB.login((response) => {
        if (response.status === 'connected') {console.log(response.authResponse.accessToken)
            localStorage.setItem('fb_token', response.authResponse.accessToken);
            getUserFbData(callback, true);
        }
    }, { scope: 'public_profile, email' });
};

export const fbLogout = (callback) => {console.log(window.FB)
    window.FB.logout((response) => {
        console.log(response)
        localStorage.removeItem('fb_token');
        callback();
    });
};