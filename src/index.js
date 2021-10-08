import React from 'react';
import { render } from 'react-dom';

import App from './App';

import { initFacebookSdk } from './api/facebook/index';
import './index.scss';

const startApp = () => {
    render (
        <App />,
        document.getElementById('root')
    );
};

// wait for facebook sdk before startup
initFacebookSdk().then(startApp);
