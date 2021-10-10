import React from 'react';

import classNames from 'classnames';

import styles from './WithLayoutWrapper.module.scss';

const WithLayoutWrapper = (
    Children
) => {

    /*
        Creating new component because if we put 'Children => props => {...}',
        this acts like a callback and React hooks (e.g. useSelector) can't be
        called inside callbacks.
    */

    const WithLayoutWrapperComponent = ({ className }) => {

        return (
            <div
                className={classNames(
                    styles.screenWrapper,
                    className
                )}
            >
                <Children/>
            </div>
        )
    };

    return WithLayoutWrapperComponent;
};

export default WithLayoutWrapper;

