import React from 'react';

import NotAvailable from "../NotAvailable";
import { splitCamelCase } from "../../../util/string";
import styles from './Data.module.scss';

const Data = ({
    title,
    value
}) => {
    const checkData = (value) => {
        if (!value) {
            return null;
        }

        return Array.isArray(value) ? value : [value];
    };

    const data = checkData(value);

    const splitTitle = splitCamelCase(title);

    return (
        <div className={styles.data}>
            <span className={styles.data__title}>{splitTitle}:</span>
            {data && data.length > 0 ? (
                <div className={styles.data__values}>
                    {data.map((item, index) => (
                        <span className={styles.data__value} key={index}>
                            {item}{index < data.length - 1 ? ',' : ''}&nbsp;
                        </span>
                    ))}
                </div>
            ) : (
                <NotAvailable itemNotAvailable={title}/>
            )}
        </div>
    );
};

export default Data;