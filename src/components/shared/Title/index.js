import React from 'react';

import classNames from "classnames";

import styles from './Title.module.scss';

const Title = ({
    title,
    className
}) => {
    return (
        <span
            className={classNames(
                styles.title,
                className
            )}
        >
            {title}
        </span>
    );
};

export default Title;