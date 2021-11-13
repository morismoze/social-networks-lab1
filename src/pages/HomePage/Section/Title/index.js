import React from 'react';

import classNames from "classnames";

import styles from './Title.module.scss';

const Title = ({
    title,
    mode
}) => {
    return (
        <div className={styles.title}>
            <h1
                className={classNames(
                    styles.title__name,
                    { [styles.dark]: mode === 'dark' }
                )}
            >
                {title}
            </h1>
        </div>
    );
};

export default Title;