import React, { useEffect } from 'react';

import { useLocation } from "react-router-dom";
import classNames from 'classnames';

import styles from './WithParagraphLayoutWrapper.module.scss';

const WithParagraphLayoutWrapper = ({
    children,
    title,
    className
}) => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const elementId = hash.replace('#', '');
            const element = document.getElementById(elementId);

            if (element && title === elementId) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, []);

    return (
        <div
            className={classNames(
                styles.paragraphWrapper,
                className
            )}
            id={title}
        >
            <h3 className={styles.paragraphWrapper__title}>{title}</h3>
            {children}
        </div>
    );
};

export default WithParagraphLayoutWrapper;

