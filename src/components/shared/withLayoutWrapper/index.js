import React from 'react';

import classNames from 'classnames';

import styles from './WithLayoutWrapper.module.scss';

const WithLayoutWrapper = ({
    children,
    className
}) => {
    return (
        <div
            className={classNames(
                styles.screenWrapper,
                className
            )}
        >
            {children}
        </div>
    );
};

export default WithLayoutWrapper;

