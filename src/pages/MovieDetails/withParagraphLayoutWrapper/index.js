import React from 'react';

import classNames from 'classnames';

import styles from './WithParagraphLayoutWrapper.module.scss';

const WithParagraphLayoutWrapper = ({
    id,
    children,
    title,
    className
}) => {
    return (
        <div
            className={classNames(
                styles.paragraphWrapper,
                className
            )}
            id={id && id}
        >
            <h3 className={styles.paragraphWrapper__title}>{title}</h3>
            {children}
        </div>
    );
};

export default WithParagraphLayoutWrapper;

