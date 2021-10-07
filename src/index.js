import React from 'react';
import { render } from 'react-dom';

import App from './App';

import './index.scss';
import { initFacebookSdk } from './api/facebook/index';

// wait for facebook sdk before startup
initFacebookSdk().then(startApp);

function startApp() {
    render (
        <App />,
        document.getElementById('root')
    );
}
