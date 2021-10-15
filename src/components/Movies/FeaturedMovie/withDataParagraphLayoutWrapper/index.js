import React from 'react';

import styles from './withDataParagraphLayoutWrapper.module.scss';
import classNames from "classnames";

const WithDataParagraphLayoutWrapper = ({
    children,
    paragraphTitle,
    className
}) => {
    return (
        <div
            className={classNames(
                styles.paragraphLayoutWrapper,
                className
            )}
        >
            <span className={styles.paragraphLayoutWrapper__title}>{paragraphTitle}</span>
            {children}
        </div>
    );
};

export default WithDataParagraphLayoutWrapper