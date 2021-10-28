import React from 'react';

import styles from './Data.module.scss';

const Data = ({
    title,
    value
}) => {
    return (
        <div className={styles.data}>
            <span className={styles.data__title}>{title.split(/(?=[A-Z])/).join(' ')}:</span>
            {Array.isArray(value) ? (
                value.map((item, index) => (
                    <span className={styles.data__value} key={index}>
                        {item} {index < value.length - 1 ? ', ' : ''}
                    </span>
                ))
            ) : (
                <span className={styles.data__value}>{value}</span>
            )}
        </div>
    );
};

export default Data;